import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateProvinceAdminInputs,
  DeleteProvinceAdminInputs,
  GetProvincesAdminArgs,
  GetProvinceByIdAdminArgs,
  PaginationArgs,
  UpdateProvinceAdminInputs,
} from "@pishroo/dto";
import { City, Province } from "@pishroo/entities";
import {
  PROVINCE_NOT_FOUND,
  PROVINCE_WITH_THIS_NAME_ALREADY_EXIST,
  CustomError,
  YOU_CANT_REMOVE_THIS_PROVINCE,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ProvinceService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Province) private provinceRepo: Repository<Province>,
    @InjectRepository(City) private cityRepo: Repository<City>
  ) {}

  async createProvince(inputs: CreateProvinceAdminInputs): Promise<Province> {
    const { name } = inputs;

    /* ---------------------- checking name duplication --------------------- */
    const nameDuplication = await this.provinceRepo.findOne({
      where: {
        name,
      },
    });

    if (nameDuplication) {
      throw new CustomError(PROVINCE_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* -------------------------------- creating -------------------------------- */

    const province = this.provinceRepo.create({
      name,
    });

    /* --------------------------------- output --------------------------------- */

    return await province.save();
  }

  async updateProvince(inputs: UpdateProvinceAdminInputs): Promise<Province> {
    const { name, provinceId } = inputs;

    const province = await this.provinceRepo.findOne({
      where: {
        id: provinceId,
      },
    });

    if (!province) {
      throw new CustomError(PROVINCE_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (name !== province.name) {
      const nameDuplication = await this.provinceRepo.findOne({
        where: {
          name,
        },
      });

      if (nameDuplication) {
        throw new CustomError(PROVINCE_WITH_THIS_NAME_ALREADY_EXIST);
      }
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(province, {
      name,
    });

    /* --------------------------------- output --------------------------------- */

    return await province.save();
  }

  async deleteProvince(inputs: DeleteProvinceAdminInputs): Promise<Province> {
    const { provinceId } = inputs;

    const province = await this.provinceRepo.findOne({
      where: {
        id: provinceId,
      },
      relations: ["cities", "provinceUsers"],
    });

    if (!province) {
      throw new CustomError(PROVINCE_NOT_FOUND);
    }

    if (province.cities.length || province.provinceUsers.length) {
      throw new CustomError(YOU_CANT_REMOVE_THIS_PROVINCE);
    }

    return province.softRemove();
  }

  async getProvinces(
    paginationArgs: PaginationArgs,
    args: GetProvincesAdminArgs
  ) {
    const { name } = args;

    const queryBuilder = this.provinceRepo.createQueryBuilder("province");

    /* --------------------------------- filters -------------------------------- */

    if (name) {
      queryBuilder.andWhere("province.name ilike :name", {
        name: `%${name}%`,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("province.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProvinceById(args: GetProvinceByIdAdminArgs): Promise<Province> {
    const { provinceId } = args;

    const province = await this.provinceRepo
      .createQueryBuilder("province")
      .andWhere("province.id = :provinceId", {
        provinceId,
      })
      .getOne();

    if (!province) {
      throw new CustomError(PROVINCE_NOT_FOUND);
    }

    return province;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async cities(provinceId: string): Promise<City[]> {
    return await this.cityRepo
      .createQueryBuilder("city")
      .andWhere("city.provinceId = :provinceId", {
        provinceId,
      })
      .getMany();
  }
}
