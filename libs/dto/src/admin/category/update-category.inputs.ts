import { IsUUID } from "class-validator";
import { CreateCategoryAdminInputs } from "./create-category.inputs";

export class UpdateCategoryAdminInputs extends CreateCategoryAdminInputs {
  @IsUUID()
  categoryId: string;
}
