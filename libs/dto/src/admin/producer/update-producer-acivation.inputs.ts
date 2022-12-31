import { IsBoolean, IsUUID } from "class-validator";

export class UpdateProducerActivationAdminInputs {
  @IsUUID()
  producerId: string;

  @IsBoolean()
  isActive: boolean;
}
