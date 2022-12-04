import { IsHexColor, IsString, MaxLength, MinLength } from "class-validator";

export class CreateColorAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsString()
  @IsHexColor()
  value: string;
}
