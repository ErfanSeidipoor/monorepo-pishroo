import { IsString, IsUUID } from "class-validator";

export class DeleteColorAdminInputs {
  @IsString()
  @IsUUID()
  colorId: string;
}
