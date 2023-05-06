import { IsOptional, IsString, IsUUID } from "class-validator";

export class GetCallsAdminArgs {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}
