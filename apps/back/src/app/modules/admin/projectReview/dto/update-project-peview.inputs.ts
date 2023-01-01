import { Field, InputType } from "@nestjs/graphql";
import { UpdateProjectReviewAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProjectReviewAdminInputsGQL extends UpdateProjectReviewAdminInputs {
  @Field(() => String, { nullable: true })
  reviewer: string;

  @Field(() => String, { nullable: true })
  fileId: string;

  @Field(() => String, { nullable: true })
  text: string;

  @Field(() => String, { nullable: true })
  projectId: string;

  @Field()
  isActive: boolean;

  @Field(() => String, { nullable: true })
  projectReviewId: string;
}
