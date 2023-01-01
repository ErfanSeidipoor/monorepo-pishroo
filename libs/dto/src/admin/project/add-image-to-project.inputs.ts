import { IsUUID } from "class-validator";

export class AddImageToProjectAdminInputs {
  @IsUUID()
  fileId: string;

  @IsUUID()
  projectId: string;
}
