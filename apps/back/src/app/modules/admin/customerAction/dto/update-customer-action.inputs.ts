import { Field, InputType } from "@nestjs/graphql";
import { UpdateCustomerActionAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateCustomerActionAdminInputsGQL extends UpdateCustomerActionAdminInputs {
  @Field()
  text: string;

  @Field()
  customerActionId: string;
}
