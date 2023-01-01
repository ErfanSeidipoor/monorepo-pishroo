import {
  IsBoolean,
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateProjectAdminInputs {
  @IsUUID()
  projectId: string;

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
  @IsLatitude()
  lat?: number;

  @IsOptional()
  @IsLongitude()
  long?: number;

  @IsOptional()
  @IsUUID()
  cityId?: string;
}
