import { Field, InputType } from "@nestjs/graphql";
import { UpdateCityAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateCityAdminInputsGQL extends UpdateCityAdminInputs {
  @Field()
  name: string;

  @Field()
  provinceId: string;

  @Field()
  cityId: string;
}
