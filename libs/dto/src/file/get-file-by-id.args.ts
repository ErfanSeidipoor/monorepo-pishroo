import { IsString, IsUUID } from "class-validator";

export class GetFileByIdAdminArgs {
  @IsString()
  @IsUUID()
  fileId: string;
}
