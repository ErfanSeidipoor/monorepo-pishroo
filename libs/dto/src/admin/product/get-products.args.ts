import { ArgsType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString } from "class-validator";

@ArgsType()
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
