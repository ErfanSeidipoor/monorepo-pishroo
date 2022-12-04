import { IsUUID } from "class-validator";

export class RemoveImageFromProductAdminInputs {
  @IsUUID()
  fileUseId: string;
}
