import { InputType, Field } from "@nestjs/graphql";
import { GetProjectReviewsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProjectReviewsAdminArgsGQL extends GetProjectReviewsAdminArgs {
  @Field(() => String, { nullable: true })
  reviewer?: string = "";

  @Field(() => String, { nullable: true })
  text?: string = "";

  @Field(() => String, { nullable: true })
  projectId?: string;
}
