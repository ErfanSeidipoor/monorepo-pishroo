import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreateTransporterActionAdminInputs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  text: string;

  @IsUUID()
  transporterId: string;
}
