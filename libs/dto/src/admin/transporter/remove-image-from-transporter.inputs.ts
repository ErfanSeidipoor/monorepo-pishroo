import { IsUUID } from "class-validator";

export class RemoveImageFromTransporterAdminInputs {
  @IsUUID()
  fileUseId: string;
}
