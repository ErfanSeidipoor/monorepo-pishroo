import { UserRoleEnum } from "@pishroo/enums";
import {
  IsAlphanumeric,
  IsArray,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
  IsUUID,
} from "class-validator";

export class UpdateUserAdminInputs {
  @IsUUID()
  userId: string;

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

  @IsEnum(UserRoleEnum, { each: true })
  @IsArray()
  roles: UserRoleEnum[];
}
