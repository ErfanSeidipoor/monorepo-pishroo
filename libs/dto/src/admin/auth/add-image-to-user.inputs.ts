import { IsUUID } from "class-validator";

export class AddImageToUserAdminInputs {
  @IsUUID()
  fileId: string;

  @IsUUID()
  userId: string;
}
