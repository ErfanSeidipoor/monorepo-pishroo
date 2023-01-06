import { Field, InputType } from "@nestjs/graphql";
import { UpdateMessageActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateMessageActivationAdminInputsGQL extends UpdateMessageActivationAdminInputs {
  @Field()
  messageId: string;

  @Field()
  isActive: boolean;
}
