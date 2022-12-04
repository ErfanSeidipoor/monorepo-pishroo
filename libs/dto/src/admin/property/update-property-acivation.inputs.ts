import { IsBoolean, IsUUID } from "class-validator";

export class UpdatePropertyActivationAdminInputs {
  @IsUUID()
  propertyId: string;

  @IsBoolean()
  isActive: boolean;
}
