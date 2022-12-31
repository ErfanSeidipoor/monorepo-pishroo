import { IsString } from "class-validator";

export class GetCategoryByIdAdminArgs {
  @IsString()
  categoryId: string;
}
