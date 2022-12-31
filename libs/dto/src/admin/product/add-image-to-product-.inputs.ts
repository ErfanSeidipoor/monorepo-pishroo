import { IsUUID } from "class-validator";

export class AddImageToProductAdminInputs {
  @IsUUID()
  fileId: string;

  @IsUUID()
  productId: string;
}
