import { IsOptional, IsString } from "class-validator";

export class GetProvincesAdminArgs {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  provinceId?: string;
}
