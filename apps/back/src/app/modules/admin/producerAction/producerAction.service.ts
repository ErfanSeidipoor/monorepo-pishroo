import { FileUseStatusEnum, FileUseTypeEnum } from "@back/enums";
import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  AddFileToProducerActionAdminInputs,
  CreateProducerActionAdminInputs,
  GetProducerActionByIdAdminArgs,
  GetProducerActionsAdminArgs,
  PaginationArgs,
  UpdateProducerActionAdminInputs,
} from "@pishroo/dto";
import {
  Producer,
  ProducerAction,
  File,
  FileUse,
  User,
} from "@pishroo/entities";
import {
  PRODUCER_ACTION_NOT_FOUND,
  PRODUCER_NOT_FOUND,
  CustomError,
  FILE_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ProducerActionService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(ProducerAction)
    private producerActionRepo: Repository<ProducerAction>,
    @InjectRepository(Producer)
    private producerRepo: Repository<Producer>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createProducerAction(
    userId: string,
    inputs: CreateProducerActionAdminInputs
  ): Promise<ProducerAction> {
    const { producerId, text } = inputs;

    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    /* ---------------------- checking name duplication --------------------- */
    const producer = await this.producerRepo.findOne({
      where: {
        id: producerId,
      },
    });

    if (!producer) {
      throw new CustomError(PRODUCER_NOT_FOUND);
    }

    /* -------------------------------- creating -------------------------------- */

    const producerAction = this.producerActionRepo.create({
      text,
      isActive: true,
      producer,
      user,
    });

    /* --------------------------------- output --------------------------------- */

    return await producerAction.save();
  }

  async updateProducerAction(
    userId: string,
    inputs: UpdateProducerActionAdminInputs
  ): Promise<ProducerAction> {
    const { producerActionId, text } = inputs;

    const producerAction = await this.producerActionRepo.findOne({
      where: {
        id: producerActionId,
        userId,
      },
    });

    if (!producerAction) {
      throw new CustomError(PRODUCER_ACTION_NOT_FOUND);
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(producerAction, {
      text,
    });

    /* --------------------------------- output --------------------------------- */

    return await producerAction.save();
  }

  async getProducerActions(
    paginationArgs: PaginationArgs,
    args: GetProducerActionsAdminArgs
  ) {
    const { producerId, search } = args;

    const queryBuilder = this.producerActionRepo
      .createQueryBuilder("producerAction")
      .leftJoinAndSelect("producerAction.user", "user")
      .leftJoinAndSelect("producerAction.producer", "producer")
      .andWhere("producerAction.producerId = :producerId", {
        producerId,
      });

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere("producerAction.text ilike :search", {
        search: `%${search}%`,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("producerAction.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProducerActionById(
    args: GetProducerActionByIdAdminArgs
  ): Promise<ProducerAction> {
    const { producerActionId } = args;

    const product = await this.producerActionRepo
      .createQueryBuilder("producerAction")
      .leftJoinAndSelect("producerAction.user", "user")
      .leftJoinAndSelect("producerAction.producer", "producer")
      .andWhere("producerAction.id = :producerActionId", {
        producerActionId,
      })
      .getOne();

    if (!product) {
      throw new CustomError(PRODUCER_ACTION_NOT_FOUND);
    }

    return product;
  }

  // /* -------------------------------------------------------------------------- */
  // /*                                    File                                    */
  // /* -------------------------------------------------------------------------- */

  async addFileToProducerAction(
    args: AddFileToProducerActionAdminInputs
  ): Promise<ProducerAction> {
    const { fileId, producerActionId } = args;

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
    /* ------------------------------ producerAction ---------------------------- */
    const producerAction = await this.producerActionRepo.findOne({
      where: {
        id: producerActionId,
      },
    });

    if (!producerAction) {
      throw new CustomError(PRODUCER_ACTION_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    const fileUse = this.fileUseRepo.create({
      file,
      producerAction,
      type: FileUseTypeEnum.producer_action,
      status: FileUseStatusEnum.accepted,
    });

    await this.dataSource.transaction(async (manager) => {
      await manager.save(file);
      await manager.save(fileUse);
    });

    return producerAction;
  }

  // /* -------------------------------------------------------------------------- */
  // /*                                ResolveField                                */
  // /* -------------------------------------------------------------------------- */

  async fileUses(producerActionId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.producerActionId = :producerActionId", {
        producerActionId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }
}
