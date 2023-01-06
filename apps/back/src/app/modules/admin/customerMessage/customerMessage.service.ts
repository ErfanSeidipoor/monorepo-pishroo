import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateCustomerMessageAdminInputs,
  DeleteCustomerMessageAdminInputs,
} from "@pishroo/dto";
import { Customer, CustomerMessage, Message } from "@pishroo/entities";
import {
  CustomError,
  CUSTOMER_MESSAGE_ALREADY_EXIST,
  CUSTOMER_MESSAGE_NOT_FOUND,
  CUSTOMER_NOT_FOUND,
  MESSAGE_IS_SUBMITTED_YOU_CANT_CHANGE_IT,
  MESSAGE_NOT_FOUND,
} from "@pishroo/http-exceptions";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CustomerMessageService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Message)
    private messageRepo: Repository<Message>,
    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>,
    @InjectRepository(CustomerMessage)
    private customerMessageRepo: Repository<CustomerMessage>
  ) {}

  async createCustomerMessage(
    inputs: CreateCustomerMessageAdminInputs
  ): Promise<CustomerMessage> {
    const { customerId, messageId } = inputs;

    const message = await this.messageRepo.findOne({
      where: {
        id: messageId,
      },
    });

    if (!message) {
      throw new CustomError(MESSAGE_NOT_FOUND);
    }

    if (message.isSubmited) {
      throw new CustomError(MESSAGE_IS_SUBMITTED_YOU_CANT_CHANGE_IT);
    }

    /* -------------------------------- customer -------------------------------- */

    const customer = this.customerRepo.findOne({
      where: {
        id: customerId,
      },
    });

    if (!customer) {
      throw new CustomError(CUSTOMER_NOT_FOUND);
    }

    /* ---------------------------- check duplication --------------------------- */

    let customerMessage = this.customerMessageRepo.create({
      customerId,
      messageId,
    });

    if (customerMessage) {
      throw new CustomError(CUSTOMER_MESSAGE_ALREADY_EXIST);
    }

    /* -------------------------------- creating -------------------------------- */

    customerMessage = this.customerMessageRepo.create({
      customerId,
      messageId,
    });

    message.count += 1;

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.save(message);
      await manager.save(customerMessage);
    });

    return customerMessage;
  }

  async deleteCustomerMessage(
    inputs: DeleteCustomerMessageAdminInputs
  ): Promise<CustomerMessage> {
    const { customerMessageId } = inputs;

    const customerMessage = await this.customerMessageRepo.findOne({
      where: {
        id: customerMessageId,
      },
      relations: ["message"],
    });

    if (!customerMessage) {
      throw new CustomError(CUSTOMER_MESSAGE_NOT_FOUND);
    }

    const { message } = customerMessage;

    if (message.isSubmited) {
      throw new CustomError(MESSAGE_IS_SUBMITTED_YOU_CANT_CHANGE_IT);
    }

    message.count -= 1;

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.save(message);
      await manager.remove(customerMessage);
    });

    return customerMessage;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async message(customerMessageId: string): Promise<Message> {
    const customerMessage = await this.customerMessageRepo
      .createQueryBuilder("customerMessage")
      .leftJoinAndSelect("customerMessage.message", "message")
      .andWhere("customerMessage.id = :customerMessageId", {
        customerMessageId,
      })
      .getOne();
    return customerMessage.message;
  }
}
