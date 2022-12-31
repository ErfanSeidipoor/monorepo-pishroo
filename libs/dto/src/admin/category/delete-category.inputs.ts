import { IsString } from "class-validator";

export class DeleteCategoryAdminInputs {
  @IsString()
  categoryId: string;
}
