import { IsBoolean, IsUUID } from "class-validator";

export class UpdateProducerAgentActivationAdminInputs {
  @IsUUID()
  producerAgentId: string;

  @IsBoolean()
  isActive: boolean;
}
