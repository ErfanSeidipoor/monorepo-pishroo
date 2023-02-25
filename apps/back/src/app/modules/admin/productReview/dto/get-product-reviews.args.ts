import { InputType, Field } from "@nestjs/graphql";
import { GetProductReviewsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProductReviewsAdminArgsGQL extends GetProductReviewsAdminArgs {
  @Field(() => String, { nullable: true })
  reviewer?: string = "";

  @Field(() => String, { nullable: true })
  text?: string = "";

  @Field(() => String, { nullable: true })
  productId?: string;
}
