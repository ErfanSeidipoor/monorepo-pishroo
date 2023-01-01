import { ArgsType, Field } from "@nestjs/graphql";
import { GetProjectReviewsAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProjectReviewsAdminArgsGQL extends GetProjectReviewsAdminArgs {
  @Field(() => String, { nullable: true })
  reviewer?: string = "";

  @Field(() => String, { nullable: true })
  text?: string = "";

  @Field(() => String, { nullable: true })
  projectId?: string;
}
