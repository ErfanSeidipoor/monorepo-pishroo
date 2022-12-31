import { Field, InputType } from "@nestjs/graphql";
import { CreateProductReviewAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProductReviewAdminInputsGQL extends CreateProductReviewAdminInputs {
  @Field(() => String, { nullable: false })
  reviewer: string;

  @Field(() => String, { nullable: false })
  fileId: string;

  @Field(() => String, { nullable: false })
  text: string;

  @Field(() => String, { nullable: false })
  productId: string;

  @Field(() => Boolean, { nullable: false })
  isActive: boolean;
}
