import { Field, InputType } from "@nestjs/graphql";
import { UpdateProvinceAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProvinceAdminInputsGQL extends UpdateProvinceAdminInputs {
  @Field()
  name: string;

  @Field()
  provinceId: string;
}
