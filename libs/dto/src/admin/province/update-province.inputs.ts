import { IsUUID } from "class-validator";
import { CreateProvinceAdminInputs } from "./create-province.inputs";

export class UpdateProvinceAdminInputs extends CreateProvinceAdminInputs {
  @IsUUID()
  provinceId: string;
}
