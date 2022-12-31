import { Field, InputType } from "@nestjs/graphql";
import { DeleteProvinceAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteProvinceAdminInputsGQL extends DeleteProvinceAdminInputs {
  @Field()
  provinceId: string;
}
