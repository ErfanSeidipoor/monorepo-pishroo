import { ArgsType, Field } from "@nestjs/graphql";
import { GetTransportersAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetTransportersAdminArgsGQL extends GetTransportersAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: true })
  isActive?: boolean;

  @Field(() => [String], { nullable: true })
  cityIds?: string[];

  @Field(() => [String], { nullable: true })
  provinceIds?: string[];
}
