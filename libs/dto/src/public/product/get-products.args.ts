import { IsBoolean, IsOptional, IsString } from "class-validator";

export class GetProductsPublicArgs {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  categoryIdentity?: string;

  @IsOptional()
  @IsBoolean()
  orderRandom?: boolean;
}
