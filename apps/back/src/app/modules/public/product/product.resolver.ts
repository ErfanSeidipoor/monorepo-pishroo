import { PaginationArgsGQL } from "@back/dto";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import {
  FileUse,
  PaginatedProduct,
  Product,
  ProductCategory,
  ProductColor,
  ProductProperty,
  ProductReview,
} from "@pishroo/entities";
import { GetProductByIdPublicArgsGQL, GetProductsPublicArgsGQL } from "./dto";
import { ProductService } from "./product.service";

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => PaginatedProduct, { nullable: false })
  async getProductsPublic(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getProductsPublicArgs") args: GetProductsPublicArgsGQL
  ) {
    return this.productService.getProducts(paginationArgs, args);
  }

  @Query(() => Product, { nullable: false })
  async getProductByIdPublic(
    @Args() getProductByIdPublicArgs: GetProductByIdPublicArgsGQL
  ) {
    return this.productService.getProductById(getProductByIdPublicArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  async fileUses(@Parent() product: Product) {
    return this.productService.fileUses(product.id);
  }

  @ResolveField(() => [ProductCategory], { nullable: false })
  async productCategories(@Parent() product: Product) {
    return this.productService.productCategories(product.id);
  }

  @ResolveField(() => [ProductProperty], { nullable: false })
  async productProperties(@Parent() product: Product) {
    return this.productService.productProperties(product.id);
  }

  @ResolveField(() => [ProductColor], { nullable: false })
  async productColors(@Parent() product: Product) {
    return this.productService.productColors(product.id);
  }

  @ResolveField(() => [ProductReview], { nullable: false })
  async productReviews(@Parent() product: Product) {
    return this.productService.productReviews(product.id);
  }
}
