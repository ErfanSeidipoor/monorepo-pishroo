import { IsBoolean, IsOptional, IsString, IsUUID } from "class-validator";

export class GetProducerAgentsAdminArgs {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  @IsUUID()
  producerId?: string;
}
