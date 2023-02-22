import { InputType, Field } from "@nestjs/graphql";
import { GetProjectsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProjectsAdminArgsGQL extends GetProjectsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => [String], { nullable: true })
  cityIds?: string[];

  @Field(() => [String], { nullable: true })
  provinceIds?: string[];
}
