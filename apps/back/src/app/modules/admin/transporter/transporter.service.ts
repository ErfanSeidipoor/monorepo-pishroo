import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  AddImageToTransporterAdminInputs,
  CreateTransporterAdminInputs,
  DeleteTransporterAdminInputs,
  GetTransporterByIdAdminArgs,
  GetTransportersAdminArgs,
  PaginationArgs,
  RemoveImageFromTransporterAdminInputs,
  UpdateTransporterActivationAdminInputs,
  UpdateTransporterAdminInputs,
} from "@pishroo/dto";
import { City, File, FileUse, Transporter } from "@pishroo/entities";
import { FileUseStatusEnum, FileUseTypeEnum } from "@back/enums";
import {
  CITY_NOT_FOUND,
  CustomError,
  FILE_NOT_FOUND,
  FILE_USE_NOT_FOUND,
  TRANSPORTER_NOT_FOUND,
  TRANSPORTER_WITH_THIS_EMAIL_ALREADY_EXIST,
  TRANSPORTER_WITH_THIS_NAME_ALREADY_EXIST,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class TransporterService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Transporter)
    private transporterRepo: Repository<Transporter>,
    @InjectRepository(City) private cityRepo: Repository<City>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createTransporter(
    inputs: CreateTransporterAdminInputs
  ): Promise<Transporter> {
    const { isActive, name, address, description, cityId, email, phone } =
      inputs;

    /* ---------------------- checking name duplication --------------------- */

    const nameDuplication = await this.transporterRepo.findOne({
      where: {
        name,
      },
    });

    if (nameDuplication) {
      throw new CustomError(TRANSPORTER_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* --------------------- checking email duplication --------------------- */

    const emailDuplication = await this.transporterRepo.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (emailDuplication) {
      throw new CustomError(TRANSPORTER_WITH_THIS_EMAIL_ALREADY_EXIST);
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

    const transporter = this.transporterRepo.create({
      isActive,
      name,
      address,
      description,
      email: email.toLowerCase(),
      phone,
      cityId,
    });

    /* --------------------------------- output --------------------------------- */

    return await transporter.save();
  }

  async updateTransporter(
    inputs: UpdateTransporterAdminInputs
  ): Promise<Transporter> {
    const {
      transporterId,
      isActive,
      name,
      address,
      description,
      cityId,
      email,
      phone,
    } = inputs;

    const transporter = await this.transporterRepo.findOne({
      where: {
        id: transporterId,
      },
    });

    if (!transporter) {
      throw new CustomError(TRANSPORTER_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (name !== transporter.name) {
      const nameDuplication = await this.transporterRepo.findOne({
        where: {
          name,
        },
      });

      if (nameDuplication) {
        throw new CustomError(TRANSPORTER_WITH_THIS_NAME_ALREADY_EXIST);
      }
    }

    /* --------------------- checking email duplication --------------------- */
    if (email !== transporter.email) {
      const emailDuplication = await this.transporterRepo.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });

      if (emailDuplication) {
        throw new CustomError(TRANSPORTER_WITH_THIS_EMAIL_ALREADY_EXIST);
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

    utils.object.assignProps(transporter, {
      isActive,
      name,
      address,
      description,
      cityId,
      email: email.toLowerCase(),
      phone,
    });

    /* --------------------------------- output --------------------------------- */

    return await transporter.save();
  }

  async deleteTransporter(
    inputs: DeleteTransporterAdminInputs
  ): Promise<Transporter> {
    const { transporterId } = inputs;

    const transporter = await this.transporterRepo.findOne({
      where: {
        id: transporterId,
      },
    });

    if (!transporter) {
      throw new CustomError(TRANSPORTER_NOT_FOUND);
    }
    // todo > adding some login before removing

    /* --------------------------------- saving --------------------------------- */
    await this.transporterRepo.softRemove(transporter);
    return transporter;
  }

  async updateTransporterActivation(
    inputs: UpdateTransporterActivationAdminInputs
  ): Promise<Transporter> {
    const { isActive, transporterId } = inputs;

    const transporter = await this.transporterRepo.findOne({
      where: {
        id: transporterId,
      },
    });

    if (!transporter) {
      throw new CustomError(TRANSPORTER_NOT_FOUND);
    }

    transporter.isActive = isActive;

    return await transporter.save();
  }

  async getTransporters(
    paginationArgs: PaginationArgs,
    args: GetTransportersAdminArgs
  ) {
    const { isActive, search, cityIds, provinceIds } = args;

    const queryBuilder = this.transporterRepo
      .createQueryBuilder("transporter")
      .leftJoinAndSelect("transporter.city", "city");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(
        `(
          (LOWER(transporter.name) ilike LOWER(:search)) OR
          (LOWER(transporter.phone) ilike LOWER(:search)) OR
          (LOWER(transporter.email) ilike LOWER(:search)) OR
          (LOWER(transporter.description) ilike LOWER(:search)) OR
          (LOWER(transporter.address) ilike LOWER(:search))
        )`,
        {
          search: `%${search}%`,
        }
      );
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("transporter.isActive = :isActive", {
        isActive,
      });
    }

    if (cityIds && cityIds.length) {
      queryBuilder.andWhere("transporter.cityId IN (:...cityIds)", { cityIds });
    }

    if (provinceIds && provinceIds.length) {
      queryBuilder.andWhere("city.provinceId IN (:...provinceIds)", {
        provinceIds,
      });
    }
    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("transporter.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getTransporterById(
    args: GetTransporterByIdAdminArgs
  ): Promise<Transporter> {
    const { transporterId } = args;

    const transporter = await this.transporterRepo
      .createQueryBuilder("transporter")
      .andWhere("transporter.id = :transporterId", {
        transporterId,
      })
      .getOne();

    if (!transporter) {
      throw new CustomError(TRANSPORTER_NOT_FOUND);
    }

    return transporter;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  async removeImageFromTransporter(
    args: RemoveImageFromTransporterAdminInputs
  ) {
    const { fileUseId } = args;

    /* ---------------------------------- file ---------------------------------- */

    const fileUse = await this.fileUseRepo.findOne({
      where: {
        id: fileUseId,
        type: FileUseTypeEnum.transporter,
      },
      relations: ["file", "transporter"],
    });

    if (!fileUse) {
      throw new CustomError(FILE_USE_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.softRemove(fileUse.file);
      await manager.softRemove(fileUse);
    });

    return fileUse.transporter;
  }

  async addImageToTransporter(
    args: AddImageToTransporterAdminInputs
  ): Promise<Transporter> {
    const { fileId, transporterId } = args;

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
    /* --------------------------------- transporter -------------------------------- */
    const transporter = await this.transporterRepo.findOne({
      where: {
        id: transporterId,
      },
    });

    if (!transporter) {
      throw new CustomError(TRANSPORTER_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    const fileUse = this.fileUseRepo.create({
      file,
      transporter,
      type: FileUseTypeEnum.transporter,
      status: FileUseStatusEnum.accepted,
    });

    await this.dataSource.transaction(async (manager) => {
      await manager.save(file);
      await manager.save(fileUse);
    });

    return transporter;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async fileUses(transporterId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.transporterId = :transporterId", {
        transporterId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }

  async city(transporterId: string): Promise<City> {
    const transporter = await this.transporterRepo
      .createQueryBuilder("transporter")
      .andWhere("transporter.id = :transporterId", {
        transporterId,
      })
      .leftJoinAndSelect("transporter.city", "city")
      .leftJoinAndSelect("city.province", "province")
      .getOne();

    return transporter.city;
  }
}
