import { Field, InputType } from "@nestjs/graphql";
import { CreateProjectReviewAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProjectReviewAdminInputsGQL extends CreateProjectReviewAdminInputs {
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
}
