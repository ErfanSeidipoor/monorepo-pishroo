import { Field, InputType } from "@nestjs/graphql";
import { UpdateCustomerActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateCustomerActivationAdminInputsGQL extends UpdateCustomerActivationAdminInputs {
  @Field()
  producerId: string;

  @Field()
  isActive: boolean;
}
