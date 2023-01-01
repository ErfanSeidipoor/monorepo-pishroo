import { IsUUID } from "class-validator";

export class RemoveImageFromProjectAdminInputs {
  @IsUUID()
  fileUseId: string;
}
