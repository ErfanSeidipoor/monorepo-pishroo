import { IsString } from "class-validator";

export class GetProductPropertyByIdAdminArgs {
  @IsString()
  productPropertyId: string;
}
