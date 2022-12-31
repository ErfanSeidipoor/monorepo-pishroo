import { IsString, IsUUID } from "class-validator";

export class GetProvinceByIdAdminArgs {
  @IsString()
  @IsUUID()
  provinceId: string;
}
