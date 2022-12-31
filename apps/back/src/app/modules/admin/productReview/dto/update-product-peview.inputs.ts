import { Field, InputType } from "@nestjs/graphql";
import { UpdateProductReviewAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProductReviewAdminInputsGQL extends UpdateProductReviewAdminInputs {
  @Field(() => String, { nullable: true })
  reviewer: string;

  @Field(() => String, { nullable: true })
  fileId: string;

  @Field(() => String, { nullable: true })
  text: string;

  @Field(() => String, { nullable: true })
  productId: string;

  @Field()
  isActive: boolean;

  @Field(() => String, { nullable: true })
  productReviewId: string;
}
