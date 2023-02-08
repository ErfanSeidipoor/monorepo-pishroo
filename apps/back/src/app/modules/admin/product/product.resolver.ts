import { PaginationArgsGQL } from "@back/dto";
import { ProductAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import {
  Color,
  FileUse,
  PaginatedProduct,
  Product,
  ProductCategory,
  ProductColor,
  ProductProperty,
  ProductReview,
} from "@pishroo/entities";
import {
  AddCategoriesToProductAdminInputsGQL,
  AddColorsToProductAdminInputsGQL,
  AddImageToProductAdminInputsGQL,
  AddPropertyToProductAdminInputsGQL,
  CreateProductAdminInputsGQL,
  DeleteProductAdminInputsGQL,
  GetProductByIdAdminArgsGQL,
  GetProductsAdminArgsGQL,
  RemoveImageFromProductAdminInputsGQL,
  RemovePropertyFromProductAdminInputsGQL,
  UpdateProductActivationAdminInputsGQL,
  UpdateProductAdminInputsGQL,
  UpdatePropertyOfProductAdminInputsGQL,
} from "./dto";
import { ProductService } from "./product.service";

@Resolver(() => Product)
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

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async addCategoriesToProductAdmin(
    @Args("addCategoriesToProductAdmin")
    inputs: AddCategoriesToProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.addCategoriesToProduct(inputs);
  }

  @Query(() => PaginatedProduct, { nullable: false })
  @UseGuards(ProductAdminGuard)
  async getProductsAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getProductsAdminArgs") args: GetProductsAdminArgsGQL
  ) {
    return this.productService.getProducts(paginationArgs, args);
  }

  @Query(() => Product, { nullable: true })
  @UseGuards(ProductAdminGuard)
  async getProductByIdAdmin(
    @Args() getProductByIdAdminArgs: GetProductByIdAdminArgsGQL
  ) {
    return this.productService.getProductById(getProductByIdAdminArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    color                                   */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => Color)
  @UseGuards(ProductAdminGuard)
  async addColorsToProductAdmin(
    @Args("addColorsToProductAdmin")
    inputs: AddColorsToProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.addColorsToProduct(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Property                                  */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async addPropertyToProductAdmin(
    @Args("addPropertyToProductAdmin")
    inputs: AddPropertyToProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.addPropertyToProduct(inputs);
  }

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async removePropertyFromProductAdmin(
    @Args("removePropertyFromProductAdmin")
    inputs: RemovePropertyFromProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.removePropertyFromProduct(inputs);
  }

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async updatePropertyOfProductAdmin(
    @Args("updatePropertyOfProductAdmin")
    inputs: UpdatePropertyOfProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.updatePropertyOfProduct(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async addImageToProductAdmin(
    @Args("addImageToProductAdmin")
    inputs: AddImageToProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.addImageToProduct(inputs);
  }

  @Mutation(() => Product)
  @UseGuards(ProductAdminGuard)
  async removeImageFromProductAdmin(
    @Args("removeImageFromProductAdmin")
    inputs: RemoveImageFromProductAdminInputsGQL
  ): Promise<Product> {
    return await this.productService.removeImageFromProduct(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(ProductAdminGuard)
  async fileUses(@Parent() product: Product) {
    return this.productService.fileUses(product.id);
  }

  @ResolveField(() => [ProductCategory], { nullable: false })
  @UseGuards(ProductAdminGuard)
  async productCategories(@Parent() product: Product) {
    return this.productService.productCategories(product.id);
  }

  @ResolveField(() => [ProductProperty], { nullable: false })
  @UseGuards(ProductAdminGuard)
  async productProperties(@Parent() product: Product) {
    return this.productService.productProperties(product.id);
  }

  @ResolveField(() => [ProductColor], { nullable: false })
  @UseGuards(ProductAdminGuard)
  async productColors(@Parent() product: Product) {
    return this.productService.productColors(product.id);
  }

  @ResolveField(() => [ProductReview], { nullable: false })
  @UseGuards(ProductAdminGuard)
  async productReviews(@Parent() product: Product) {
    return this.productService.productReviews(product.id);
  }
}
