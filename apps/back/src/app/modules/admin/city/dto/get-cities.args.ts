import { InputType, Field } from "@nestjs/graphql";
import { GetCitiesAdminArgs } from "@pishroo/dto";

@InputType()
export class GetCitiesAdminArgsGQL extends GetCitiesAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => String, { nullable: true })
  provinceId?: string;

  @Field(() => String, { nullable: true })
  cityId?: string;
}
