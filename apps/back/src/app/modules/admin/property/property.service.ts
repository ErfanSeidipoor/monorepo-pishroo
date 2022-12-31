import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreatePropertyAdminInputs,
  DeletePropertyAdminInputs,
  GetPropertiesAdminArgs,
  GetPropertyByIdAdminArgs,
  PaginationArgs,
  UpdatePropertyActivationAdminInputs,
  UpdatePropertyAdminInputs,
} from "@pishroo/dto";
import { ProductProperty, Property } from "@pishroo/entities";
import {
  CustomError,
  PROPERTY_NOT_FOUND,
  PROPERTY_WITH_THIS_NAME_ALREADY_EXIST,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class PropertyService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
    @InjectRepository(ProductProperty)
    private productPropertyRepo: Repository<ProductProperty>
  ) {}

  async createProperty(inputs: CreatePropertyAdminInputs): Promise<Property> {
    const { isActive, name, unit } = inputs;

    /* ---------------------- checking name duplication --------------------- */
    const nameDuplication = await this.propertyRepo.findOne({
      where: {
        name,
      },
    });

    if (nameDuplication) {
      throw new CustomError(PROPERTY_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* -------------------------------- creating -------------------------------- */

    const property = this.propertyRepo.create({
      isActive,
      name,
      unit,
    });

    /* --------------------------------- output --------------------------------- */

    return await property.save();
  }

  async updateProperty(inputs: UpdatePropertyAdminInputs): Promise<Property> {
    const { isActive, name, propertyId, unit } = inputs;

    const property = await this.propertyRepo.findOne({
      where: {
        id: propertyId,
      },
    });

    if (!property) {
      throw new CustomError(PROPERTY_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (name !== property.name) {
      const nameDuplication = await this.propertyRepo.findOne({
        where: {
          name,
        },
      });

      if (nameDuplication) {
        throw new CustomError(PROPERTY_WITH_THIS_NAME_ALREADY_EXIST);
      }
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(property, {
      isActive,
      name,
      unit,
    });

    /* --------------------------------- output --------------------------------- */

    return await property.save();
  }

  async deleteProperty(inputs: DeletePropertyAdminInputs): Promise<Property> {
    const { propertyId } = inputs;

    const property = await this.propertyRepo.findOne({
      where: {
        id: propertyId,
      },
      relations: ["productProperties"],
    });

    if (!property) {
      throw new CustomError(PROPERTY_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.softRemove(property.productProperties);
      await manager.softRemove(property);
    });

    return property;
  }

  async updatePropertyActivation(
    inputs: UpdatePropertyActivationAdminInputs
  ): Promise<Property> {
    const { isActive, propertyId } = inputs;

    const property = await this.propertyRepo.findOne({
      where: {
        id: propertyId,
      },
    });

    if (!property) {
      throw new CustomError(PROPERTY_NOT_FOUND);
    }

    property.isActive = isActive;
    return await property.save();
  }

  async getProperties(
    paginationArgs: PaginationArgs,
    args: GetPropertiesAdminArgs
  ) {
    const { name, isActive, units } = args;

    const queryBuilder = this.propertyRepo.createQueryBuilder("property");

    /* --------------------------------- filters -------------------------------- */

    if (name) {
      queryBuilder.andWhere("property.name ilike :name", {
        name: `%${name}%`,
      });
    }

    if (units && units.length) {
      queryBuilder.andWhere("property.unit In (:...units)", { units });
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("property.isActive = :isActive", {
        isActive,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("property.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getPropertyById(args: GetPropertyByIdAdminArgs): Promise<Property> {
    const { propertyId } = args;

    const property = await this.propertyRepo
      .createQueryBuilder("property")
      .andWhere("property.id = :propertyId", {
        propertyId,
      })
      .getOne();

    if (!property) {
      throw new CustomError(PROPERTY_NOT_FOUND);
    }

    return property;
  }
}
