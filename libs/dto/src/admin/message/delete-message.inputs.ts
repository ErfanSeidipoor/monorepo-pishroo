import { IsString } from "class-validator";

export class DeleteMessageAdminInputs {
  @IsString()
  messageId: string;
}
