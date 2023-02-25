import { Transform } from "class-transformer";
import {
  IsBoolean,
  IsString,
  MaxLength,
  MinLength,
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsUUID,
} from "class-validator";

export class CreateProjectAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  name: string;

  @IsString()
  @MinLength(3)
  @MaxLength(200)
  slug: string;

  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  description?: string;

  @IsOptional()
  @Transform((props) => props.value || undefined)
  @Transform(({ value }) => +value || value)
  @IsLatitude()
  lat?: number;

  @IsOptional()
  @Transform(({ value }) => {
    return +value || value;
  })
  @IsLongitude()
  long?: number;

  @IsOptional()
  @IsUUID()
  cityId?: string;
}
