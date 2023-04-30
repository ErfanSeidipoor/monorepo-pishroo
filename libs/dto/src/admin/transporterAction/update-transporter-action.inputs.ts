import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class UpdateTransporterActionAdminInputs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  text: string;

  @IsUUID()
  transporterActionId: string;
}
