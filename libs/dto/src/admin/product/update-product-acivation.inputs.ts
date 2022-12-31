import { IsBoolean, IsUUID } from "class-validator";

export class UpdateProductActivationAdminInputs {
  @IsUUID()
  productId: string;

  @IsBoolean()
  isActive: boolean;
}
