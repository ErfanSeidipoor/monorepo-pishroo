import { PaginationArgsGQL } from "@back/dto";
import { ContentAdminGuard } from "@back/guards";
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
  FileUse,
  PaginatedProductReview,
  Product,
  ProductReview,
} from "@pishroo/entities";
import {
  CreateProductReviewAdminInputsGQL,
  DeleteProductReviewAdminInputsGQL,
  GetProductReviewByIdAdminArgsGQL,
  GetProductReviewsAdminArgsGQL,
  UpdateProductReviewAdminInputsGQL,
} from "./dto";
import { ProductReviewService } from "./productReview.service";

@Resolver(() => ProductReview)
export class ProductReviewResolver {
  constructor(private productReviewService: ProductReviewService) {}

  @Mutation(() => ProductReview)
  @UseGuards(ContentAdminGuard)
  async createProductReviewAdmin(
    @Args("createProductReviewAdminInputs")
    inputs: CreateProductReviewAdminInputsGQL
  ): Promise<ProductReview> {
    return await this.productReviewService.createProductReview(inputs);
  }

  @Mutation(() => ProductReview)
  @UseGuards(ContentAdminGuard)
  async updateProductReviewAdmin(
    @Args("updateProductReviewAdminInputs")
    inputs: UpdateProductReviewAdminInputsGQL
  ): Promise<ProductReview> {
    return await this.productReviewService.updateProductReview(inputs);
  }

  @Mutation(() => ProductReview)
  @UseGuards(ContentAdminGuard)
  async deleteProductReviewAdmin(
    @Args("deleteProductReviewAdminInputs")
    inputs: DeleteProductReviewAdminInputsGQL
  ): Promise<ProductReview> {
    return await this.productReviewService.deleteProductReview(inputs);
  }

  @Query(() => PaginatedProductReview, { nullable: false })
  @UseGuards(ContentAdminGuard)
  async getProductReviewsAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getProductReviewsAdminArgs") args: GetProductReviewsAdminArgsGQL
  ) {
    return this.productReviewService.getProductReviews(paginationArgs, args);
  }

  @Query(() => ProductReview, { nullable: true })
  @UseGuards(ContentAdminGuard)
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
