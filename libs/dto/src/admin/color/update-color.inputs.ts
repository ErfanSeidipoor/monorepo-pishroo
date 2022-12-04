import { IsUUID } from "class-validator";
import { CreateColorAdminInputs } from "./create-color.inputs";

export class UpdateColorAdminInputs extends CreateColorAdminInputs {
  @IsUUID()
  colorId: string;
}
