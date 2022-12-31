import { IsBoolean, IsOptional, IsString, IsUUID } from "class-validator";

export class GetTransporterAgentsAdminArgs {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  @IsUUID()
  transporterId?: string;
}
