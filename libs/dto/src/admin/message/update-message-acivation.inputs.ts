import { IsBoolean, IsUUID } from "class-validator";

export class UpdateMessageActivationAdminInputs {
  @IsUUID()
  messageId: string;

  @IsBoolean()
  isActive: boolean;
}
