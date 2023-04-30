import { Field, InputType } from "@nestjs/graphql";
import { AddFileToCustomerActionAdminInputs } from "@pishroo/dto";

@InputType()
export class AddFileToCustomerActionAdminInputsGQL extends AddFileToCustomerActionAdminInputs {
  @Field()
  fileId: string;

  @Field()
  customerActionId: string;
}
