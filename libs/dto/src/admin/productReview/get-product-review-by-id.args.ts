import { IsString, IsUUID } from "class-validator";

export class GetProductReviewByIdAdminArgs {
  @IsString()
  @IsUUID()
  productReviewId: string;
}
