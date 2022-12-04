import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateColorAdminInputs,
  DeleteColorAdminInputs,
  GetColorsAdminArgs,
  GetColorByIdAdminArgs,
  PaginationArgs,
  UpdateColorAdminInputs,
} from "@pishroo/dto";
import { Color } from "@pishroo/entities";
import {
  COLOR_NOT_FOUND,
  COLOR_WITH_THIS_NAME_ALREADY_EXIST,
  COLOR_WITH_THIS_VALUE_ALREADY_EXIST,
  CustomError,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ColorService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Color) private colorRepo: Repository<Color>
  ) {}

  async createColor(inputs: CreateColorAdminInputs): Promise<Color> {
    const { value, name } = inputs;

    /* ---------------------- checking name duplication --------------------- */
    const nameDuplication = await this.colorRepo.findOne({
      where: {
        name,
      },
    });

    if (nameDuplication) {
      throw new CustomError(COLOR_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* ---------------------- checking value duplication --------------------- */
    const valueDuplication = await this.colorRepo.findOne({
      where: {
        value,
      },
    });

    if (valueDuplication) {
      throw new CustomError(COLOR_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* -------------------------------- creating -------------------------------- */

    const color = this.colorRepo.create({
      value,
      name,
    });

    /* --------------------------------- output --------------------------------- */

    return await color.save();
  }

  async updateColor(inputs: UpdateColorAdminInputs): Promise<Color> {
    const { value, name, colorId } = inputs;

    const color = await this.colorRepo.findOne({
      where: {
        id: colorId,
      },
    });

    if (!color) {
      throw new CustomError(COLOR_NOT_FOUND);
    }

    console.log({ inputs, color, value, name, colorId });

    /* ------------------------ checking name duplication ----------------------- */
    if (name !== color.name) {
      const nameDuplication = await this.colorRepo.findOne({
        where: {
          name,
        },
      });

      if (nameDuplication) {
        throw new CustomError(COLOR_WITH_THIS_NAME_ALREADY_EXIST);
      }
    }

    /* ------------------------ checking value duplication ----------------------- */
    if (value !== color.value) {
      const valueDuplication = await this.colorRepo.findOne({
        where: {
          value,
        },
      });

      if (valueDuplication) {
        throw new CustomError(COLOR_WITH_THIS_VALUE_ALREADY_EXIST);
      }
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(color, {
      value,
      name,
    });

    /* --------------------------------- output --------------------------------- */

    return await color.save();
  }

  async deleteColor(inputs: DeleteColorAdminInputs): Promise<Color> {
    const { colorId } = inputs;

    const color = await this.colorRepo.findOne({
      where: {
        id: colorId,
      },
      relations: ["productColors"],
    });

    if (!color) {
      throw new CustomError(COLOR_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.softRemove(color.productColors);
      await manager.softRemove(color);
    });

    return color;
  }

  async getColors(paginationArgs: PaginationArgs, args: GetColorsAdminArgs) {
    const { name, value } = args;

    const queryBuilder = this.colorRepo.createQueryBuilder("color");

    /* --------------------------------- filters -------------------------------- */

    if (name) {
      queryBuilder.andWhere("color.name ilike :name", {
        name: `%${name}%`,
      });
    }

    if (value) {
      queryBuilder.andWhere("color.value ilike :value", {
        value: `%${value}%`,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("color.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getColorById(args: GetColorByIdAdminArgs): Promise<Color> {
    const { colorId } = args;

    const color = await this.colorRepo
      .createQueryBuilder("color")
      .andWhere("color.id = :colorId", {
        colorId,
      })
      .getOne();

    if (!color) {
      throw new CustomError(COLOR_NOT_FOUND);
    }

    return color;
  }
}
