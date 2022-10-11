import { UserRoleEnum } from "@pishroo/enums";
import {
  IsAlphanumeric,
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserAdminInputs {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsAlphanumeric()
  username: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsAlphanumeric()
  password: string;

  @IsEnum(UserRoleEnum, { each: true })
  @IsArray()
  roles: UserRoleEnum[];
}
