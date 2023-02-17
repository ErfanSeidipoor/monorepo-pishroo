import { IsUUID } from "class-validator";

export class UploadFileAdminInputs {
  @IsUUID()
  file: File;
}
