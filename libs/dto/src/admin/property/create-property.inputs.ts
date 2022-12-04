import { PropertyUnitEnum } from "@pishroo/enums";
import {
  IsBoolean,
  IsEnum,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreatePropertyAdminInputs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsEnum(PropertyUnitEnum)
  unit: PropertyUnitEnum;

  @IsBoolean()
  isActive: boolean;
}
