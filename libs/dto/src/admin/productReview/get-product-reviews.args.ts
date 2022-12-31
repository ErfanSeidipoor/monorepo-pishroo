import { IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class GetProductReviewsAdminArgs {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  reviewer?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  text?: string;

  @IsOptional()
  @IsUUID()
  productId?: string;
}
