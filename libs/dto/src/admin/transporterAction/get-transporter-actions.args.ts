import { IsOptional, IsString, IsUUID } from "class-validator";

export class GetTransporterActionsAdminArgs {
  @IsUUID()
  transporterId?: string;

  @IsOptional()
  @IsString()
  search?: string;
}
