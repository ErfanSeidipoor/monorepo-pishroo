import { ArgsType, Field } from "@nestjs/graphql";
import { GetCityByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetCityByIdAdminArgsGQL extends GetCityByIdAdminArgs {
  @Field(() => String, { nullable: false })
  cityId: string;
}
