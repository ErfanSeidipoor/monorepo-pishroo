import { Field, InputType } from "@nestjs/graphql";
import { DeleteMessageAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteMessageAdminInputsGQL extends DeleteMessageAdminInputs {
  @Field()
  messageId: string;
}
