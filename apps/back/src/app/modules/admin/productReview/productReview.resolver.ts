import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, ContentAdminGuard } from "@back/guards";
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
  ProductReview,
  PaginatedProductReview,
  Product,
  FileUse,
} from "@pishroo/entities";
import { ProductReviewService } from "./productReview.service";
import {
  CreateProductReviewAdminInputsGQL,
  DeleteProductReviewAdminInputsGQL,
  GetProductReviewsAdminArgsGQL,
  GetProductReviewByIdAdminArgsGQL,
  UpdateProductReviewAdminInputsGQL,
} from "./dto";

@Resolver(() => ProductReview)
export class ProductReviewResolver {
  constructor(private productReviewService: ProductReviewService) {}

  @Mutation(() => ProductReview)
  @UseGuards(ContentAdminGuard)
  async createProductReviewAdmin(
    @Args("createProductReviewAdmin")
    inputs: CreateProductReviewAdminInputsGQL
  ): Promise<ProductReview> {
    return await this.productReviewService.createProductReview(inputs);
  }

  @Mutation(() => ProductReview)
  @UseGuards(ContentAdminGuard)
  async updateProductReviewAdmin(
    @Args("updateProductReviewAdmin")
    inputs: UpdateProductReviewAdminInputsGQL
  ): Promise<ProductReview> {
    return await this.productReviewService.updateProductReview(inputs);
  }

  @Mutation(() => ProductReview)
  @UseGuards(ContentAdminGuard)
  async deleteProductReviewAdmin(
    @Args("deleteProductReviewAdmin")
    inputs: DeleteProductReviewAdminInputsGQL
  ): Promise<ProductReview> {
    return await this.productReviewService.deleteProductReview(inputs);
  }

  @Query(() => PaginatedProductReview, { nullable: true })
  @UseGuards(AdminGuard)
  async getProductReviewsAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetProductReviewsAdminArgsGQL
  ) {
    return this.productReviewService.getProductReviews(paginationArgs, args);
  }

  @Query(() => ProductReview, { nullable: true })
  @UseGuards(AdminGuard)
  async getProductReviewByIdAdmin(
    @Args() getProductReviewByIdAdminArgs: GetProductReviewByIdAdminArgsGQL
  ) {
    return this.productReviewService.getProductReviewById(
      getProductReviewByIdAdminArgs
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => Product, { nullable: false })
  @UseGuards(ContentAdminGuard)
  async product(@Parent() productReview: ProductReview) {
    return this.productReviewService.product(productReview.id);
  }

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(ContentAdminGuard)
  async fileUses(@Parent() productReview: ProductReview) {
    return this.productReviewService.fileUses(productReview.id);
  }
}
