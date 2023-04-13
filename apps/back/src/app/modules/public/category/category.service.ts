import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GetCategoriesPublicArgs, PaginationArgs } from "@pishroo/dto";
import { Category } from "@pishroo/entities";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>
  ) {}

  async getCategories(
    paginationArgs: PaginationArgs,
    args: GetCategoriesPublicArgs
  ) {
    const queryBuilder = this.categoryRepo.createQueryBuilder("category");

    /* --------------------------------- filters -------------------------------- */

    queryBuilder.andWhere("category.isActive = :isActive", {
      isActive: true,
    });

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("category.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }
}
