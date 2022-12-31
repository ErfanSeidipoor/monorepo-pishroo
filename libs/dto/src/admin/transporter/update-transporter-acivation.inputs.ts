import { IsBoolean, IsUUID } from "class-validator";

export class UpdateTransporterActivationAdminInputs {
  @IsUUID()
  transporterId: string;

  @IsBoolean()
  isActive: boolean;
}
