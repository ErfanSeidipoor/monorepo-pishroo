import { ArgsType, Field } from "@nestjs/graphql";
import { GetProjectByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProjectByIdAdminArgsGQL extends GetProjectByIdAdminArgs {
  @Field(() => String, { nullable: false })
  projectId: string;
}
