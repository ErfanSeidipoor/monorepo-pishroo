import { Field, InputType } from "@nestjs/graphql";
import { UpdateProjectReviewAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProjectReviewAdminInputsGQL extends UpdateProjectReviewAdminInputs {
  @Field(() => String, { nullable: false })
  reviewer: string;

  @Field(() => String, { nullable: false })
  fileId: string;

  @Field(() => String, { nullable: false })
  text: string;

  @Field(() => String, { nullable: false })
  projectId: string;

  @Field(() => Boolean, { nullable: false })
  isActive: boolean;

  @Field(() => String, { nullable: false })
  projectReviewId: string;
}
