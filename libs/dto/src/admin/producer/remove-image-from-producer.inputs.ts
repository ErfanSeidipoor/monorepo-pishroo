import { IsUUID } from "class-validator";

export class RemoveImageFromProducerAdminInputs {
  @IsUUID()
  fileUseId: string;
}
