import { IsString, IsUUID } from "class-validator";

export class DeleteProvinceAdminInputs {
  @IsString()
  @IsUUID()
  provinceId: string;
}
