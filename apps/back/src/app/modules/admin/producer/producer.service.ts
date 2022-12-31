import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  AddImageToProducerAdminInputs,
  CreateProducerAdminInputs,
  DeleteProducerAdminInputs,
  GetProducerByIdAdminArgs,
  GetProducersAdminArgs,
  PaginationArgs,
  RemoveImageFromProducerAdminInputs,
  UpdateProducerActivationAdminInputs,
  UpdateProducerAdminInputs,
} from "@pishroo/dto";
import { City, File, FileUse, Producer } from "@pishroo/entities";
import { FileUseStatusEnum, FileUseTypeEnum } from "@pishroo/enums";
import {
  CITY_NOT_FOUND,
  CustomError,
  FILE_NOT_FOUND,
  FILE_USE_NOT_FOUND,
  PRODUCER_NOT_FOUND,
  PRODUCER_WITH_THIS_EMAIL_ALREADY_EXIST,
  PRODUCER_WITH_THIS_NAME_ALREADY_EXIST,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ProducerService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Producer)
    private producerRepo: Repository<Producer>,
    @InjectRepository(City) private cityRepo: Repository<City>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createProducer(inputs: CreateProducerAdminInputs): Promise<Producer> {
    const { isActive, name, address, description, cityId, email, phone } =
      inputs;

    /* ---------------------- checking name duplication --------------------- */

    const nameDuplication = await this.producerRepo.findOne({
      where: {
        name,
      },
    });

    if (nameDuplication) {
      throw new CustomError(PRODUCER_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* --------------------- checking email duplication --------------------- */

    const emailDuplication = await this.producerRepo.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (emailDuplication) {
      throw new CustomError(PRODUCER_WITH_THIS_EMAIL_ALREADY_EXIST);
    }

    /* ---------------------------------- city ---------------------------------- */

    const city = await this.cityRepo.findOne({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    /* -------------------------------- creating -------------------------------- */

    const producer = this.producerRepo.create({
      isActive,
      name,
      address,
      description,
      email: email.toLowerCase(),
      phone,
      cityId,
    });

    /* --------------------------------- output --------------------------------- */

    return await producer.save();
  }

  async updateProducer(inputs: UpdateProducerAdminInputs): Promise<Producer> {
    const {
      producerId,
      isActive,
      name,
      address,
      description,
      cityId,
      email,
      phone,
    } = inputs;

    const producer = await this.producerRepo.findOne({
      where: {
        id: producerId,
      },
    });

    if (!producer) {
      throw new CustomError(PRODUCER_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (name !== producer.name) {
      const nameDuplication = await this.producerRepo.findOne({
        where: {
          name,
        },
      });

      if (nameDuplication) {
        throw new CustomError(PRODUCER_WITH_THIS_NAME_ALREADY_EXIST);
      }
    }

    /* --------------------- checking email duplication --------------------- */

    if (email !== producer.email) {
      const emailDuplication = await this.producerRepo.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });

      if (emailDuplication) {
        throw new CustomError(PRODUCER_WITH_THIS_EMAIL_ALREADY_EXIST);
      }
    }

    /* ---------------------------------- city ---------------------------------- */

    const city = await this.cityRepo.find({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(producer, {
      isActive,
      name,
      address,
      description,
      cityId,
      email: email.toLowerCase(),
      phone,
    });

    /* --------------------------------- output --------------------------------- */

    return await producer.save();
  }

  async deleteProducer(inputs: DeleteProducerAdminInputs): Promise<Producer> {
    const { producerId } = inputs;

    const producer = await this.producerRepo.findOne({
      where: {
        id: producerId,
      },
    });

    if (!producer) {
      throw new CustomError(PRODUCER_NOT_FOUND);
    }
    // todo > adding some login before removing

    /* --------------------------------- saving --------------------------------- */
    await this.producerRepo.softRemove(producer);
    return producer;
  }

  async updateProducerActivation(
    inputs: UpdateProducerActivationAdminInputs
  ): Promise<Producer> {
    const { isActive, producerId } = inputs;

    const producer = await this.producerRepo.findOne({
      where: {
        id: producerId,
      },
    });

    if (!producer) {
      throw new CustomError(PRODUCER_NOT_FOUND);
    }

    producer.isActive = isActive;

    return await producer.save();
  }

  async getProducers(
    paginationArgs: PaginationArgs,
    args: GetProducersAdminArgs
  ) {
    const { isActive, search, cityIds, provinceIds } = args;

    const queryBuilder = this.producerRepo
      .createQueryBuilder("producer")
      .leftJoinAndSelect("producer.city", "city");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(
        `(
          (LOWER(producer.name) ilike LOWER(:search)) OR
          (LOWER(producer.phone) ilike LOWER(:search)) OR
          (LOWER(producer.email) ilike LOWER(:search)) OR
          (LOWER(producer.description) ilike LOWER(:search)) OR
          (LOWER(producer.address) ilike LOWER(:search))
        )`,
        {
          search: `%${search}%`,
        }
      );
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("producer.isActive = :isActive", {
        isActive,
      });
    }

    if (cityIds && cityIds.length) {
      queryBuilder.andWhere("producer.cityId IN (:...cityIds)", { cityIds });
    }

    if (provinceIds && provinceIds.length) {
      queryBuilder.andWhere("city.provinceId IN (:...provinceIds)", {
        provinceIds,
      });
    }
    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("producer.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProducerById(args: GetProducerByIdAdminArgs): Promise<Producer> {
    const { producerId } = args;

    const producer = await this.producerRepo
      .createQueryBuilder("producer")
      .andWhere("producer.id = :producerId", {
        producerId,
      })
      .getOne();

    if (!producer) {
      throw new CustomError(PRODUCER_NOT_FOUND);
    }

    return producer;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  async removeImageFromProducer(args: RemoveImageFromProducerAdminInputs) {
    const { fileUseId } = args;

    /* ---------------------------------- file ---------------------------------- */

    const fileUse = await this.fileUseRepo.findOne({
      where: {
        id: fileUseId,
        type: FileUseTypeEnum.producer,
      },
      relations: ["file", "producer"],
    });

    if (!fileUse) {
      throw new CustomError(FILE_USE_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.softRemove(fileUse.file);
      await manager.softRemove(fileUse);
    });

    return fileUse.producer;
  }

  async addImageToProducer(
    args: AddImageToProducerAdminInputs
  ): Promise<Producer> {
    const { fileId, producerId } = args;

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
    /* --------------------------------- producer -------------------------------- */
    const producer = await this.producerRepo.findOne({
      where: {
        id: producerId,
      },
    });

    if (!producer) {
      throw new CustomError(PRODUCER_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    const fileUse = this.fileUseRepo.create({
      file,
      producer,
      type: FileUseTypeEnum.producer,
      status: FileUseStatusEnum.accepted,
    });

    await this.dataSource.transaction(async (manager) => {
      await manager.save(file);
      await manager.save(fileUse);
    });

    return producer;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async fileUses(producerId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.producerId = :producerId", {
        producerId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }

  async city(producerId: string): Promise<City> {
    const producer = await this.producerRepo
      .createQueryBuilder("producer")
      .andWhere("producer.id = :producerId", {
        producerId,
      })
      .leftJoinAndSelect("producer.city", "city")
      .leftJoinAndSelect("city.province", "province")
      .getOne();

    return producer.city;
  }
}
