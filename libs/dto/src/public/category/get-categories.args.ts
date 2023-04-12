import { IsOptional, IsString } from "class-validator";

export class GetCategoriesPublicArgs {
  @IsOptional()
  @IsString()
  search?: string;
}
