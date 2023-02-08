import { PaginationArgsGQL } from "@back/dto";
import { ProductAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Category, PaginatedCategory } from "@pishroo/entities";
import { CategoryService } from "./category.service";
import {
  CreateCategoryAdminInputsGQL,
  DeleteCategoryAdminInputsGQL,
  GetCategoriesAdminArgsGQL,
  GetCategoryByIdAdminArgsGQL,
  UpdateCategoryActivationAdminInputsGQL,
  UpdateCategoryAdminInputsGQL,
} from "./dto";

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Mutation(() => Category)
  @UseGuards(ProductAdminGuard)
  async createCategoryAdmin(
    @Args("createCategoryAdmin")
    inputs: CreateCategoryAdminInputsGQL
  ): Promise<Category> {
    return await this.categoryService.createCategory(inputs);
  }

  @Mutation(() => Category)
  @UseGuards(ProductAdminGuard)
  async updateCategoryAdmin(
    @Args("updateCategoryAdmin")
    inputs: UpdateCategoryAdminInputsGQL
  ): Promise<Category> {
    return await this.categoryService.updateCategory(inputs);
  }

  @Mutation(() => Category)
  @UseGuards(ProductAdminGuard)
  async updateCategoryActivationAdmin(
    @Args("updateCategoryActivationAdmin")
    inputs: UpdateCategoryActivationAdminInputsGQL
  ): Promise<Category> {
    return await this.categoryService.updateCategoryActivation(inputs);
  }

  @Mutation(() => Category)
  @UseGuards(ProductAdminGuard)
  async deleteCategoryAdmin(
    @Args("deleteCategoryAdmin")
    inputs: DeleteCategoryAdminInputsGQL
  ): Promise<Category> {
    return await this.categoryService.deleteCategory(inputs);
  }

  @Query(() => PaginatedCategory, { nullable: true })
  @UseGuards(ProductAdminGuard)
  async getCategoriesAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args() args: GetCategoriesAdminArgsGQL
  ) {
    return this.categoryService.getCategories(paginationArgs, args);
  }

  @Query(() => Category, { nullable: true })
  @UseGuards(ProductAdminGuard)
  async getCategoryByIdAdmin(
    @Args() getCategoryByIdAdminArgs: GetCategoryByIdAdminArgsGQL
  ) {
    return this.categoryService.getCategoryById(getCategoryByIdAdminArgs);
  }
}
