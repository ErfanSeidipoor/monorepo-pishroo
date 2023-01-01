import { IsBoolean, IsUUID } from "class-validator";

export class UpdateCustomerActivationAdminInputs {
  @IsUUID()
  customerId: string;

  @IsBoolean()
  isActive: boolean;
}
