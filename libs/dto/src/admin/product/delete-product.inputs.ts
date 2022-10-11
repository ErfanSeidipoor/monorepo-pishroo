import { IsString } from "class-validator";

export class DeleteProductAdminInputs {
  @IsString()
  productId: string;
}
