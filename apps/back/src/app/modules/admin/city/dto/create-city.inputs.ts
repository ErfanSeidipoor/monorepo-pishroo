import { Field, InputType } from "@nestjs/graphql";
import { CreateCityAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateCityAdminInputsGQL extends CreateCityAdminInputs {
  @Field()
  name: string;

  @Field()
  provinceId: string;
}
