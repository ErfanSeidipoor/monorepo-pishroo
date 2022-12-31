import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreateCityAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsUUID()
  @IsString()
  provinceId: string;
}
