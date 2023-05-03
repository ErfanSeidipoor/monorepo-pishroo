import { IsBoolean, IsUUID } from "class-validator";

export class UpdateMessageSubmitAdminInputs {
  @IsUUID()
  messageId: string;

  @IsBoolean()
  isSubmited: boolean;
}
