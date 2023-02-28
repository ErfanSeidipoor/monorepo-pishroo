import { IsOptional, IsString, IsUUID } from "class-validator";

export class GetProductPropertiesAdminArgs {
  @IsString()
  @IsUUID()
  productId: string;

  @IsOptional()
  @IsString()
  name?: string;
}
