import { IsString, IsUUID } from "class-validator";

export class DeleteProductReviewAdminInputs {
  @IsString()
  @IsUUID()
  productReviewId: string;
}
