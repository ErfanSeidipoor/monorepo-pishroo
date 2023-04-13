import { IsBoolean, IsOptional, IsString } from "class-validator";

export class GetProjectsPublicArgs {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsBoolean()
  orderRandom?: boolean;
}
