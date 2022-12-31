import { IsBoolean, IsOptional, IsString } from "class-validator";

export class GetProvincesAdminArgs {
  @IsOptional()
  @IsString()
  name?: string;
}
