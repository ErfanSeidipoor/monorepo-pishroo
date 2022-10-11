import { IsUUID } from "class-validator";
import { CreateProductAdminInputs } from "./create-product.inputs";

export class UpdateProductAdminInputs extends CreateProductAdminInputs {
  @IsUUID()
  productId: string;
}
