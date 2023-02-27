import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateMessageAdminInputs,
  DeleteMessageAdminInputs,
  GetMessageByIdAdminArgs,
  GetMessagesAdminArgs,
  PaginationArgs,
  UpdateMessageActivationAdminInputs,
  UpdateMessageAdminInputs,
} from "@pishroo/dto";
import {
  City,
  Customer,
  CustomerMessage,
  File,
  FileUse,
  Message,
  User,
} from "@pishroo/entities";
import {
  CustomError,
  CUSTOMER_NOT_FOUND,
  MESSAGE_IS_SUBMITTED_YOU_CANT_CHANGE_IT,
  MESSAGE_NOT_FOUND,
  USER_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class MessageService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Message)
    private messageRepo: Repository<Message>,
    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(CustomerMessage)
    private customerMessageRepo: Repository<CustomerMessage>,
    @InjectRepository(City) private cityRepo: Repository<City>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createMessage(inputs: CreateMessageAdminInputs): Promise<Message> {
    const { isActive, text, userId, customerIds } = inputs;

    /* ---------------------------------- user ---------------------------------- */

    const user = this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    /* -------------------------------- customers ------------------------------- */

    const customerMessages: CustomerMessage[] = [];

    for (const customerId of customerIds) {
      const customer = this.customerRepo.findOne({
        where: {
          id: customerId,
        },
      });
      if (!customer) {
        throw new CustomError(CUSTOMER_NOT_FOUND);
      }

      customerMessages.push(
        this.customerMessageRepo.create({
          customerId,
        })
      );
    }

    /* -------------------------------- creating -------------------------------- */

    const message = this.messageRepo.create({
      isActive,
      userId,
      text,
      customerMessages,
      count: customerMessages.length,
    });

    /* --------------------------------- output --------------------------------- */

    return await message.save();
  }

  async updateMessage(inputs: UpdateMessageAdminInputs): Promise<Message> {
    const { isActive, text, userId, customerIds, messageId } = inputs;

    const message = await this.messageRepo.findOne({
      where: {
        id: messageId,
      },
      relations: ["customerMessages"],
    });

    const { customerMessages: oldCustomerMessages } = message;

    if (!message) {
      throw new CustomError(MESSAGE_NOT_FOUND);
    }

    if (message.isSubmited) {
      throw new CustomError(MESSAGE_IS_SUBMITTED_YOU_CANT_CHANGE_IT);
    }

    /* ---------------------------------- user ---------------------------------- */

    const user = this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    /* -------------------------------- customers ------------------------------- */

    const customerMessages: CustomerMessage[] = [];

    for (const customerId of customerIds) {
      const customer = this.customerRepo.findOne({
        where: {
          id: customerId,
        },
      });
      if (!customer) {
        throw new CustomError(CUSTOMER_NOT_FOUND);
      }

      customerMessages.push(
        this.customerMessageRepo.create({
          customerId,
          messageId,
        })
      );
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(message, {
      isActive,
      userId,
      text,
      count: customerMessages.length,
    });

    console.log({ message });

    /* --------------------------------- output --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.save(message);
      await manager.remove(oldCustomerMessages);
      await manager.save(customerMessages);
    });

    message.customerMessages = customerMessages;

    return message;
  }

  async deleteMessage(inputs: DeleteMessageAdminInputs): Promise<Message> {
    const { messageId } = inputs;

    const message = await this.messageRepo.findOne({
      where: {
        id: messageId,
      },
      relations: ["customerMessages"],
    });

    if (!message) {
      throw new CustomError(MESSAGE_NOT_FOUND);
    }

    if (message.isSubmited) {
      throw new CustomError(MESSAGE_IS_SUBMITTED_YOU_CANT_CHANGE_IT);
    }

    /* --------------------------------- saving --------------------------------- */
    await this.messageRepo.remove(message);
    return message;
  }

  async updateMessageActivation(
    inputs: UpdateMessageActivationAdminInputs
  ): Promise<Message> {
    const { isActive, messageId } = inputs;

    const message = await this.messageRepo.findOne({
      where: {
        id: messageId,
      },
    });

    if (!message) {
      throw new CustomError(MESSAGE_NOT_FOUND);
    }

    message.isActive = isActive;

    return await message.save();
  }

  async getMessages(
    paginationArgs: PaginationArgs,
    args: GetMessagesAdminArgs
  ) {
    const { isActive, isSubmitted, search, customerId, userId } = args;

    const queryBuilder = this.messageRepo
      .createQueryBuilder("message")
      .leftJoinAndSelect("message.customerMessages", "customerMessage");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(`(LOWER(message.text) ilike LOWER(:search))`, {
        search: `%${search}%`,
      });
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("message.isActive = :isActive", {
        isActive,
      });
    }

    if (typeof isSubmitted !== "undefined") {
      queryBuilder.andWhere("message.isSubmited = :isSubmitted", {
        isSubmitted,
      });
    }

    if (customerId) {
      queryBuilder.andWhere("customerMessage.customerId = :customerId", {
        customerId,
      });
    }

    if (userId) {
      queryBuilder.andWhere("message.userId = :userId", {
        userId,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("message.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getMessageById(args: GetMessageByIdAdminArgs): Promise<Message> {
    const { messageId } = args;

    const message = await this.messageRepo
      .createQueryBuilder("message")
      .andWhere("message.id = :messageId", {
        messageId,
      })
      .getOne();

    if (!message) {
      throw new CustomError(MESSAGE_NOT_FOUND);
    }

    return message;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async customerMessages(messageId: string): Promise<CustomerMessage[]> {
    return await this.customerMessageRepo
      .createQueryBuilder("customerMessage")
      .leftJoinAndSelect("customerMessage.customer", "customer")
      .andWhere("customerMessage.messageId = :messageId", {
        messageId,
      })
      .getMany();
  }

  async user(messageId: string): Promise<User> {
    const message = await this.messageRepo
      .createQueryBuilder("message")
      .leftJoinAndSelect("message.user", "user")
      .andWhere("message.id = :messageId", {
        messageId,
      })
      .getOne();

    return message.user;
  }
}
