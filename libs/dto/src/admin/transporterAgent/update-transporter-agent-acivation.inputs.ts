import { IsBoolean, IsUUID } from "class-validator";

export class UpdateTransporterAgentActivationAdminInputs {
  @IsUUID()
  transporterAgentId: string;

  @IsBoolean()
  isActive: boolean;
}
