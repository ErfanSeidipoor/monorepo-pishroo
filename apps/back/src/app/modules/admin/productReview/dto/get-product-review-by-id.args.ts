import { ArgsType, Field } from "@nestjs/graphql";
import { GetProductReviewByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProductReviewByIdAdminArgsGQL extends GetProductReviewByIdAdminArgs {
  @Field(() => String, { nullable: false })
  productReviewId: string;
}
