import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateProductAdminInputs {
  @IsString()
  @MinLength(10)
  @MaxLength(50)
  name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(50)
  slug: string;

  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsString()
  text?: string;
}
