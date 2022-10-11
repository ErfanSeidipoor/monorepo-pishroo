import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, ProductAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PaginatedProduct, Product } from "@pishroo/entities";
// dto
import {
  CreateProductAdminInputsGQL,
  DeleteProductAdminInputsGQL,
  GetProductsAdminArgsGQL,
  UpdateProductActivationAdminInputsGQL,
  UpdateProductAdminInputsGQL,
} from "./dto";
import { ProductService } from "./product.service";

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async createProductAdmin(
    @Args("createProductAdmin")
    inputs: CreateProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.createProduct(inputs);
  }

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async updateProductAdmin(
    @Args("updateProductAdmin")
    inputs: UpdateProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.updateProduct(inputs);
  }

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async updateProductActivationAdmin(
    @Args("updateProductActivationAdmin")
    inputs: UpdateProductActivationAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.updateProductActivation(inputs);
  }

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async deleteProductAdmin(
    @Args("deleteProductAdmin")
    inputs: DeleteProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.deleteProduct(inputs);
  }

  @Query(() => PaginatedProduct, { nullable: true })
  @UseGuards(AdminGuard)
  async getProductsAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetProductsAdminArgsGQL
  ) {
    return this.productService.getProducts(paginationArgs, args);
  }
}
