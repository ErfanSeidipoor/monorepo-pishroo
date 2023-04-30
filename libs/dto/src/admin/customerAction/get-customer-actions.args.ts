import { IsOptional, IsString, IsUUID } from "class-validator";

export class GetCustomerActionsAdminArgs {
  @IsUUID()
  customerId: string;

  @IsOptional()
  @IsString()
  search?: string;
}
