import { IsOptional, IsPositive } from "class-validator";
import { Type } from "class-transformer";

export class GetUsersAdminArgs {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number;
}
