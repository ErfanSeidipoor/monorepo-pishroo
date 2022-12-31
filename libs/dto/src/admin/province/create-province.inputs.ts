import { IsBoolean, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProvinceAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;
}
