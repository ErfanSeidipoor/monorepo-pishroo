import { FileUseStatusEnum, FileUseTypeEnum } from "@back/enums";
import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  AddFileToCustomerActionAdminInputs,
  CreateCustomerActionAdminInputs,
  GetCustomerActionByIdAdminArgs,
  GetCustomerActionsAdminArgs,
  PaginationArgs,
  UpdateCustomerActionAdminInputs,
} from "@pishroo/dto";
import {
  Customer,
  CustomerAction,
  File,
  FileUse,
  User,
} from "@pishroo/entities";
import {
  CUSTOMER_ACTION_NOT_FOUND,
  CUSTOMER_NOT_FOUND,
  CustomError,
  FILE_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CustomerActionService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(CustomerAction)
    private customerActionRepo: Repository<CustomerAction>,
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createCustomerAction(
    userId: string,
    inputs: CreateCustomerActionAdminInputs
  ): Promise<CustomerAction> {
    const { customerId, text } = inputs;

    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    /* ---------------------- checking name duplication --------------------- */
    const customer = await this.customerRepo.findOne({
      where: {
        id: customerId,
      },
    });

    if (!customer) {
      throw new CustomError(CUSTOMER_NOT_FOUND);
    }

    /* -------------------------------- creating -------------------------------- */

    const customerAction = this.customerActionRepo.create({
      text,
      isActive: true,
      customer,
      user,
    });

    /* --------------------------------- output --------------------------------- */

    return await customerAction.save();
  }

  async updateCustomerAction(
    userId: string,
    inputs: UpdateCustomerActionAdminInputs
  ): Promise<CustomerAction> {
    const { customerActionId, text } = inputs;

    const customerAction = await this.customerActionRepo.findOne({
      where: {
        id: customerActionId,
        userId,
      },
    });

    if (!customerAction) {
      throw new CustomError(CUSTOMER_ACTION_NOT_FOUND);
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(customerAction, {
      text,
    });

    /* --------------------------------- output --------------------------------- */

    return await customerAction.save();
  }

  async getCustomerActions(
    paginationArgs: PaginationArgs,
    args: GetCustomerActionsAdminArgs
  ) {
    const { customerId, search } = args;

    const queryBuilder = this.customerActionRepo
      .createQueryBuilder("customerAction")
      .leftJoinAndSelect("customerAction.user", "user")
      .leftJoinAndSelect("customerAction.customer", "customer")
      .andWhere("customerAction.customerId = :customerId", {
        customerId,
      });

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere("customerAction.text ilike :search", {
        search: `%${search}%`,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("customerAction.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getCustomerActionById(
    args: GetCustomerActionByIdAdminArgs
  ): Promise<CustomerAction> {
    const { customerActionId } = args;

    const product = await this.customerActionRepo
      .createQueryBuilder("customerAction")
      .leftJoinAndSelect("customerAction.user", "user")
      .leftJoinAndSelect("customerAction.customer", "customer")
      .andWhere("customerAction.id = :customerActionId", {
        customerActionId,
      })
      .getOne();

    if (!product) {
      throw new CustomError(CUSTOMER_ACTION_NOT_FOUND);
    }

    return product;
  }

  // /* -------------------------------------------------------------------------- */
  // /*                                    File                                    */
  // /* -------------------------------------------------------------------------- */

  async addFileToCustomerAction(
    args: AddFileToCustomerActionAdminInputs
  ): Promise<CustomerAction> {
    const { fileId, customerActionId } = args;

    /* ---------------------------------- file ---------------------------------- */
    const file = await this.fileRepo.findOne({
      where: {
        id: fileId,
        isUsed: false,
      },
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    file.isUsed = true;
    /* ------------------------------ customerAction ---------------------------- */
    const customerAction = await this.customerActionRepo.findOne({
      where: {
        id: customerActionId,
      },
    });

    if (!customerAction) {
      throw new CustomError(CUSTOMER_ACTION_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    const fileUse = this.fileUseRepo.create({
      file,
      customerAction,
      type: FileUseTypeEnum.customer_action,
      status: FileUseStatusEnum.accepted,
    });

    await this.dataSource.transaction(async (manager) => {
      await manager.save(file);
      await manager.save(fileUse);
    });

    return customerAction;
  }

  // /* -------------------------------------------------------------------------- */
  // /*                                ResolveField                                */
  // /* -------------------------------------------------------------------------- */

  async fileUses(customerActionId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.customerActionId = :customerActionId", {
        customerActionId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }
}
