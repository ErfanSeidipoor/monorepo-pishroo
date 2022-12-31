import { IsUUID } from "class-validator";
import { CreateCityAdminInputs } from "./create-city.inputs";

export class UpdateCityAdminInputs extends CreateCityAdminInputs {
  @IsUUID()
  cityId: string;
}
