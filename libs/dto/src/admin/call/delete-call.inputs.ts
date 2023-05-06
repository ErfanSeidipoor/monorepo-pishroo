import { IsString } from "class-validator";

export class DeleteCallAdminInputs {
  @IsString()
  callId: string;
}
