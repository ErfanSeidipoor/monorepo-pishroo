import { ArgsType, Field } from "@nestjs/graphql";
import { GetCustomersAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetCustomersAdminArgsGQL extends GetCustomersAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: true })
  isActive?: boolean;

  @Field(() => [String], { nullable: true })
  cityIds?: string[];

  @Field(() => [String], { nullable: true })
  provinceIds?: string[];
}
