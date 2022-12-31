import { Field, InputType } from "@nestjs/graphql";
import { DeleteCityAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteCityAdminInputsGQL extends DeleteCityAdminInputs {
  @Field()
  cityId: string;
}
