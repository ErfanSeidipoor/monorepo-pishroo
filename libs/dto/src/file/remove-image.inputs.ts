import { IsUUID } from "class-validator";

export class RemoveImageAdminInputs {
  @IsUUID()
  fileId: string;
}
