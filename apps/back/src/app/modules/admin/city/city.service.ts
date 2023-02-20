import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateCityAdminInputs,
  DeleteCityAdminInputs,
  GetCitiesAdminArgs,
  GetCityByIdAdminArgs,
  PaginationArgs,
  UpdateCityAdminInputs,
} from "@pishroo/dto";
import { City, Province } from "@pishroo/entities";
import {
  CITY_NOT_FOUND,
  CITY_WITH_THIS_NAME_ALREADY_EXIST,
  CustomError,
  PROVINCE_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { Repository } from "typeorm";

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(Province) private provinceRepo: Repository<Province>,
    @InjectRepository(City) private cityRepo: Repository<City>
  ) {}

  async createCity(inputs: CreateCityAdminInputs): Promise<City> {
    const { name, provinceId } = inputs;

    /* -------------------------------- province -------------------------------- */

    const province = await this.provinceRepo.findOne({
      where: {
        id: provinceId,
      },
    });

    if (!province) {
      throw new CustomError(PROVINCE_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */

    const nameDuplication = await this.cityRepo.findOne({
      where: {
        name,
        provinceId,
      },
    });

    if (nameDuplication) {
      throw new CustomError(CITY_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* -------------------------------- creating -------------------------------- */

    const city = this.cityRepo.create({
      name,
      provinceId,
    });

    /* --------------------------------- output --------------------------------- */
    return await city.save();
  }

  async updateCity(inputs: UpdateCityAdminInputs): Promise<City> {
    const { name, provinceId, cityId } = inputs;

    const city = await this.cityRepo.findOne({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    /* -------------------------------- province -------------------------------- */

    const province = await this.provinceRepo.findOne({
      where: {
        id: provinceId,
      },
    });

    if (!province) {
      throw new CustomError(PROVINCE_NOT_FOUND);
    }
    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(city, {
      name,
      provinceId,
    });

    /* --------------------------------- output --------------------------------- */

    return await city.save();
  }

  async deleteCity(inputs: DeleteCityAdminInputs): Promise<City> {
    const { cityId } = inputs;

    const city = await this.cityRepo.findOne({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    return city.softRemove();
  }

  async getCities(paginationArgs: PaginationArgs, args: GetCitiesAdminArgs) {
    const { name, provinceId, cityId } = args;

    const queryBuilder = this.cityRepo.createQueryBuilder("city");

    /* --------------------------------- filters -------------------------------- */

    if (name) {
      queryBuilder.andWhere("city.name ilike :name", {
        name: `%${name}%`,
      });
    }

    if (provinceId) {
      queryBuilder.andWhere("city.provinceId = :provinceId", {
        provinceId,
      });
    }

    if (cityId) {
      queryBuilder.andWhere("city.id = :cityId", {
        cityId,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("city.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getCityById(args: GetCityByIdAdminArgs): Promise<City> {
    const { cityId } = args;

    const city = await this.cityRepo
      .createQueryBuilder("city")
      .andWhere("city.id = :cityId", {
        cityId,
      })
      .getOne();

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    return city;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async province(cityId: string): Promise<Province> {
    const city = await this.cityRepo
      .createQueryBuilder("city")
      .andWhere("city.id = :cityId", {
        cityId,
      })
      .leftJoinAndSelect("city.province", "province")
      .getOne();

    return city.province;
  }
}
