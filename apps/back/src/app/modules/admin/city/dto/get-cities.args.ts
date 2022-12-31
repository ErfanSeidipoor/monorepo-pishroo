import { ArgsType, Field } from "@nestjs/graphql";
import { GetCitiesAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetCitiesAdminArgsGQL extends GetCitiesAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => String, { nullable: true })
  provinceId?: string;
}
