import { IsBoolean, IsOptional, IsString } from "class-validator";

export class GetProductsAdminArgs {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
