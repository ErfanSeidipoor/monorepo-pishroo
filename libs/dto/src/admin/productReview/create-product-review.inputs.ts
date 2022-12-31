import {
  IsBoolean,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateProductReviewAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  reviewer: string;

  @IsUUID()
  fileId: string;

  @IsString()
  @MinLength(3)
  @MaxLength(200)
  text: string;

  @IsString()
  @IsUUID()
  productId: string;

  @IsBoolean()
  isActive: boolean;
}
