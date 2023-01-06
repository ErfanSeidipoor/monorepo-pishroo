import { IsString } from "class-validator";

export class GetMessageByIdAdminArgs {
  @IsString()
  messageId: string;
}
