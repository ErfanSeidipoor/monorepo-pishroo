import { Field, InputType } from "@nestjs/graphql";
import { CreateCustomerActionAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateCustomerActionAdminInputsGQL extends CreateCustomerActionAdminInputs {
  @Field()
  text: string;

  @Field()
  customerId: string;
}
