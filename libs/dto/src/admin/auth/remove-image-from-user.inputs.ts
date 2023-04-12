import { IsUUID } from "class-validator";

export class RemoveImageFromUserAdminInputs {
  @IsUUID()
  fileUseId: string;
}
