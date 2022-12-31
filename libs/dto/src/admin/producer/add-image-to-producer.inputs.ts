import { IsUUID } from "class-validator";

export class AddImageToProducerAdminInputs {
  @IsUUID()
  fileId: string;

  @IsUUID()
  producerId: string;
}
