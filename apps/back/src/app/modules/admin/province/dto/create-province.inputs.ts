import { Field, InputType } from "@nestjs/graphql";
import { CreateProvinceAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProvinceAdminInputsGQL extends CreateProvinceAdminInputs {
  @Field()
  name: string;
}
