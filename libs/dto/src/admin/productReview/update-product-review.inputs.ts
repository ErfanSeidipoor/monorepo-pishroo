import { IsUUID } from "class-validator";
import { CreateProductReviewAdminInputs } from "./create-product-review.inputs";

export class UpdateProductReviewAdminInputs extends CreateProductReviewAdminInputs {
  @IsUUID()
  productReviewId: string;
}
