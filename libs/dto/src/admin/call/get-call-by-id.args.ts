import { IsUUID } from "class-validator";

export class GetCallByIdAdminArgs {
  @IsUUID()
  callId: string;
}
