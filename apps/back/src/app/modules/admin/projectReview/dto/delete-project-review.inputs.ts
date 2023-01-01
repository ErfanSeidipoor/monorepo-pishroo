import { Field, InputType } from "@nestjs/graphql";
import { DeleteProjectReviewAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteProjectReviewAdminInputsGQL extends DeleteProjectReviewAdminInputs {
  @Field(() => String, { nullable: false })
  projectReviewId: string;
}
