import { UserRoleEnum } from "@pishroo/enums";
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class GetUsersAdminArgs {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(UserRoleEnum, { each: true })
  @IsArray()
  roles?: UserRoleEnum[];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsUUID()
  @IsString()
  userId?: string;
}
