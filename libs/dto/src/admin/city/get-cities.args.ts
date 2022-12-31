import { IsBoolean, IsOptional, IsString, IsUUID } from "class-validator";

export class GetCitiesAdminArgs {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsUUID()
  @IsString()
  provinceId?: string;
}
