import { IsString } from "class-validator";

export class GetProductByIdAdminArgs {
  @IsString()
  productId: string;
}
