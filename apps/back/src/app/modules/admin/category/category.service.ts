import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateCategoryAdminInputs,
  DeleteCategoryAdminInputs,
  GetCategoriesAdminArgs,
  GetCategoryByIdAdminArgs,
  PaginationArgs,
  UpdateCategoryActivationAdminInputs,
  UpdateCategoryAdminInputs,
} from "@pishroo/dto";
import { Category } from "@pishroo/entities";
import {
  CATEGORY_NOT_FOUND,
  CATEGORY_WITH_THIS_NAME_ALREADY_EXIST,
  CustomError,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CategoryService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Category) private categoryRepo: Repository<Category>
  ) {}

  async createCategory(inputs: CreateCategoryAdminInputs): Promise<Category> {
    const { isActive, name } = inputs;

    /* ---------------------- checking name duplication --------------------- */
    const nameDuplication = await this.categoryRepo.findOne({
      where: {
        name,
      },
    });

    if (nameDuplication) {
      throw new CustomError(CATEGORY_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* -------------------------------- creating -------------------------------- */

    const category = this.categoryRepo.create({
      isActive,
      name,
    });

    /* --------------------------------- output --------------------------------- */

    return await category.save();
  }

  async updateCategory(inputs: UpdateCategoryAdminInputs): Promise<Category> {
    const { isActive, name, categoryId } = inputs;

    const category = await this.categoryRepo.findOne({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new CustomError(CATEGORY_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (name !== category.name) {
      const nameDuplication = await this.categoryRepo.findOne({
        where: {
          name,
        },
      });

      if (nameDuplication) {
        throw new CustomError(CATEGORY_WITH_THIS_NAME_ALREADY_EXIST);
      }
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(category, {
      isActive,
      name,
    });

    /* --------------------------------- output --------------------------------- */

    return await category.save();
  }

  async deleteCategory(inputs: DeleteCategoryAdminInputs): Promise<Category> {
    const { categoryId } = inputs;

    const category = await this.categoryRepo.findOne({
      where: {
        id: categoryId,
      },
      relations: ["productCategories"],
    });

    if (!category) {
      throw new CustomError(CATEGORY_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.softRemove(category.productCategories);
      await manager.softRemove(category);
    });

    return category;
  }

  async updateCategoryActivation(
    inputs: UpdateCategoryActivationAdminInputs
  ): Promise<Category> {
    const { isActive, categoryId } = inputs;

    const category = await this.categoryRepo.findOne({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new CustomError(CATEGORY_NOT_FOUND);
    }

    category.isActive = isActive;
    return await category.save();
  }

  async getCategories(
    paginationArgs: PaginationArgs,
    args: GetCategoriesAdminArgs
  ) {
    const { name, isActive } = args;

    const queryBuilder = this.categoryRepo.createQueryBuilder("category");

    /* --------------------------------- filters -------------------------------- */

    if (name) {
      queryBuilder.andWhere("category.name ilike :name", {
        name: `%${name}%`,
      });
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("category.isActive = :isActive", {
        isActive,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("category.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getCategoryById(args: GetCategoryByIdAdminArgs): Promise<Category> {
    const { categoryId } = args;

    const category = await this.categoryRepo
      .createQueryBuilder("category")
      .andWhere("category.id = :categoryId", {
        categoryId,
      })
      .getOne();

    if (!category) {
      throw new CustomError(CATEGORY_NOT_FOUND);
    }

    return category;
  }
}
