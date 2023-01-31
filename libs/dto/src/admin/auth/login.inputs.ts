import { IsAlphanumeric, IsString, MaxLength } from "class-validator";

export class LoginAdminInputs {
  @IsString()
  @MaxLength(20)
  @IsAlphanumeric()
  username: string;

  @IsString()
  @MaxLength(20)
  @IsAlphanumeric()
  password: string;
}
