import { IsBoolean, IsUUID } from "class-validator";

export class UpdateCategoryActivationAdminInputs {
  @IsUUID()
  categoryId: string;

  @IsBoolean()
  isActive: boolean;
}
