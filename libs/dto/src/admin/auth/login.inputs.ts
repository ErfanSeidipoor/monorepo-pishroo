import {
  IsAlphanumeric,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class LoginAdminInputs {
  @IsString()
  @MinLength(10)
  @MaxLength(20)
  @IsAlphanumeric()
  username: string;

  @IsString()
  @MinLength(10)
  @MaxLength(20)
  @IsAlphanumeric()
  password: string;
}
