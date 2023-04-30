import { FileUseStatusEnum, FileUseTypeEnum } from "@back/enums";
import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  AddFileToTransporterActionAdminInputs,
  CreateTransporterActionAdminInputs,
  GetTransporterActionByIdAdminArgs,
  GetTransporterActionsAdminArgs,
  PaginationArgs,
  UpdateTransporterActionAdminInputs,
} from "@pishroo/dto";
import {
  Transporter,
  TransporterAction,
  File,
  FileUse,
  User,
} from "@pishroo/entities";
import {
  TRANSPORTER_ACTION_NOT_FOUND,
  TRANSPORTER_NOT_FOUND,
  CustomError,
  FILE_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class TransporterActionService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(TransporterAction)
    private transporterActionRepo: Repository<TransporterAction>,
    @InjectRepository(Transporter)
    private transporterRepo: Repository<Transporter>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createTransporterAction(
    userId: string,
    inputs: CreateTransporterActionAdminInputs
  ): Promise<TransporterAction> {
    const { transporterId, text } = inputs;

    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    /* ---------------------- checking name duplication --------------------- */
    const transporter = await this.transporterRepo.findOne({
      where: {
        id: transporterId,
      },
    });

    if (!transporter) {
      throw new CustomError(TRANSPORTER_NOT_FOUND);
    }

    /* -------------------------------- creating -------------------------------- */

    const transporterAction = this.transporterActionRepo.create({
      text,
      isActive: true,
      transporter,
      user,
    });

    /* --------------------------------- output --------------------------------- */

    return await transporterAction.save();
  }

  async updateTransporterAction(
    userId: string,
    inputs: UpdateTransporterActionAdminInputs
  ): Promise<TransporterAction> {
    const { transporterActionId, text } = inputs;

    const transporterAction = await this.transporterActionRepo.findOne({
      where: {
        id: transporterActionId,
        userId,
      },
    });

    if (!transporterAction) {
      throw new CustomError(TRANSPORTER_ACTION_NOT_FOUND);
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(transporterAction, {
      text,
    });

    /* --------------------------------- output --------------------------------- */

    return await transporterAction.save();
  }

  async getTransporterActions(
    paginationArgs: PaginationArgs,
    args: GetTransporterActionsAdminArgs
  ) {
    const { transporterId, search } = args;

    const queryBuilder = this.transporterActionRepo
      .createQueryBuilder("transporterAction")
      .leftJoinAndSelect("transporterAction.user", "user")
      .leftJoinAndSelect("transporterAction.transporter", "transporter")
      .andWhere("transporterAction.transporterId = :transporterId", {
        transporterId,
      });

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere("transporterAction.text ilike :search", {
        search: `%${search}%`,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("transporterAction.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getTransporterActionById(
    args: GetTransporterActionByIdAdminArgs
  ): Promise<TransporterAction> {
    const { transporterActionId } = args;

    const product = await this.transporterActionRepo
      .createQueryBuilder("transporterAction")
      .leftJoinAndSelect("transporterAction.user", "user")
      .leftJoinAndSelect("transporterAction.transporter", "transporter")
      .andWhere("transporterAction.id = :transporterActionId", {
        transporterActionId,
      })
      .getOne();

    if (!product) {
      throw new CustomError(TRANSPORTER_ACTION_NOT_FOUND);
    }

    return product;
  }

  // /* -------------------------------------------------------------------------- */
  // /*                                    File                                    */
  // /* -------------------------------------------------------------------------- */

  async addFileToTransporterAction(
    args: AddFileToTransporterActionAdminInputs
  ): Promise<TransporterAction> {
    const { fileId, transporterActionId } = args;

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
    /* ------------------------------ transporterAction ---------------------------- */
    const transporterAction = await this.transporterActionRepo.findOne({
      where: {
        id: transporterActionId,
      },
    });

    if (!transporterAction) {
      throw new CustomError(TRANSPORTER_ACTION_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    const fileUse = this.fileUseRepo.create({
      file,
      transporterAction,
      type: FileUseTypeEnum.transporter_action,
      status: FileUseStatusEnum.accepted,
    });

    await this.dataSource.transaction(async (manager) => {
      await manager.save(file);
      await manager.save(fileUse);
    });

    return transporterAction;
  }

  // /* -------------------------------------------------------------------------- */
  // /*                                ResolveField                                */
  // /* -------------------------------------------------------------------------- */

  async fileUses(transporterActionId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.transporterActionId = :transporterActionId", {
        transporterActionId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }
}
