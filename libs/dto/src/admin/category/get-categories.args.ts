import { IsBoolean, IsOptional, IsString } from "class-validator";

export class GetCategoriesAdminArgs {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
