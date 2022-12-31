import { Field, InputType } from "@nestjs/graphql";
import { DeleteProductReviewAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteProductReviewAdminInputsGQL extends DeleteProductReviewAdminInputs {
  @Field(() => String, { nullable: false })
  productReviewId: string;
}
