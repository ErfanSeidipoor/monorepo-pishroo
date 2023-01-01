import { Field, InputType } from "@nestjs/graphql";
import { DeleteCustomerAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteCustomerAdminInputsGQL extends DeleteCustomerAdminInputs {
  @Field()
  customerId: string;
}
