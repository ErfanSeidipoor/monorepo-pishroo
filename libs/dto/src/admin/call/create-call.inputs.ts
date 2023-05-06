import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCallAdminInputs {
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  description: string;

  @IsString()
  @MinLength(10)
  @MaxLength(15)
  newPhone: string;
}
