import { PaginationArgsGQL } from "@back/dto";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Category, PaginatedCategory } from "@pishroo/entities";
import { CategoryService } from "./category.service";
import { GetCategoriesPublicArgsGQL } from "./dto";

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => PaginatedCategory, { nullable: false })
  async getCategoriesPublic(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getCategoriesPublicArgs") args: GetCategoriesPublicArgsGQL
  ) {
    return this.categoryService.getCategories(paginationArgs, args);
  }
}
