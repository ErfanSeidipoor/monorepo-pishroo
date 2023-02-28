import { PropertyUnitEnum } from "@pishroo/enums";
import {
  IsBoolean,
  IsEnum,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdatePropertyAdminInputs {
  @IsUUID()
  propertyId: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsEnum(PropertyUnitEnum)
  unit: PropertyUnitEnum;

  @IsBoolean()
  isActive: boolean;
}
