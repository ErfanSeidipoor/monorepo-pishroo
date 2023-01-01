import { ArgsType, Field } from "@nestjs/graphql";
import { GetProjectReviewByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProjectReviewByIdAdminArgsGQL extends GetProjectReviewByIdAdminArgs {
  @Field(() => String, { nullable: false })
  projectReviewId: string;
}
