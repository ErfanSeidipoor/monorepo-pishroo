import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class UpdateCallAdminInputs {
  @IsUUID()
  callId: string;

  @IsString()
  @MinLength(2)
  @MaxLength(200)
  description: string;

  @IsString()
  @MinLength(2)
  @MaxLength(15)
  newPhone: string;
}
