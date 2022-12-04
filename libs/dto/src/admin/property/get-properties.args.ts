import { PropertyUnitEnum } from "@pishroo/enums";
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from "class-validator";

export class GetPropertiesAdminArgs {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(PropertyUnitEnum, { each: true })
  units?: PropertyUnitEnum[] = [];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
