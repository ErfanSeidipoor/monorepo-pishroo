import { IsUUID } from "class-validator";
import { CreatePropertyAdminInputs } from "./create-property.inputs";

export class UpdatePropertyAdminInputs extends CreatePropertyAdminInputs {
  @IsUUID()
  propertyId: string;
}
