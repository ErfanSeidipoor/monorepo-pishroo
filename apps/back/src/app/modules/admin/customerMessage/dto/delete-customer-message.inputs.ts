import { Field, InputType } from "@nestjs/graphql";
import { DeleteCustomerMessageAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteCustomerMessageAdminInputsGQL extends DeleteCustomerMessageAdminInputs {
  @Field()
  customerMessageId: string;
}
