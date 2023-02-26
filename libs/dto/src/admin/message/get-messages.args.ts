import { IsBoolean, IsOptional, IsString, IsUUID } from "class-validator";

export class GetMessagesAdminArgs {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isSubmitted?: boolean;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsUUID()
  customerId?: string;
}
