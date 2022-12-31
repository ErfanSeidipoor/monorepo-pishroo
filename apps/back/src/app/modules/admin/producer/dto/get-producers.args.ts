import { ArgsType, Field } from "@nestjs/graphql";
import { GetProducersAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProducersAdminArgsGQL extends GetProducersAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: true })
  isActive?: boolean;

  @Field(() => [String], { nullable: true })
  cityIds?: string[];

  @Field(() => [String], { nullable: true })
  provinceIds?: string[];
}
