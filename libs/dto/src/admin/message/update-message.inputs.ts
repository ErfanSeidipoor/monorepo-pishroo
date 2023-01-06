import { IsUUID } from "class-validator";
import { CreateMessageAdminInputs } from "./create-message.inputs";

export class UpdateMessageAdminInputs extends CreateMessageAdminInputs {
  @IsUUID()
  messageId: string;
}
