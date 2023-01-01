import { ArgsType, Field } from "@nestjs/graphql";
import { GetProjectsAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProjectsAdminArgsGQL extends GetProjectsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: true })
  isActive?: boolean;

  @Field(() => [String], { nullable: true })
  cityIds?: string[];

  @Field(() => [String], { nullable: true })
  provinceIds?: string[];
}
