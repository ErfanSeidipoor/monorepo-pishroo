import { IsOptional, IsString, IsUUID } from "class-validator";

export class GetProducerActionsAdminArgs {
  @IsUUID()
  producerId?: string;

  @IsOptional()
  @IsString()
  search?: string;
}
