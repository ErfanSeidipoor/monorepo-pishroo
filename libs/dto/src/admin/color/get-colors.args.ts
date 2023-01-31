import { IsOptional, IsString } from "class-validator";

export class GetColorsAdminArgs {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  value?: string;
}
