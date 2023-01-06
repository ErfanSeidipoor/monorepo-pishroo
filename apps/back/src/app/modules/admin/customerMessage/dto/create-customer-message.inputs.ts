import { Field, InputType } from "@nestjs/graphql";
import { CreateCustomerMessageAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateCustomerMessageAdminInputsGQL extends CreateCustomerMessageAdminInputs {
  @Field()
  customerId: string;

  @Field()
  messageId: string;
}
