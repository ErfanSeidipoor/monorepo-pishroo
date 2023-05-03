import { Field, InputType } from "@nestjs/graphql";
import { UpdateMessageSubmitAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateMessageSubmitAdminInputsGQL extends UpdateMessageSubmitAdminInputs {
  @Field()
  messageId: string;

  @Field()
  isSubmited: boolean;
}
