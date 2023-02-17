import { IsUUID } from "class-validator";
import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateProductAdminInputs {
  @IsUUID()
  productId: string;

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
