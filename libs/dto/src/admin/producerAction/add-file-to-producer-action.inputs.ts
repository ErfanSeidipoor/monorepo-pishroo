import { IsUUID } from "class-validator";

export class AddFileToProducerActionAdminInputs {
  @IsUUID()
  fileId: string;

  @IsUUID()
  producerActionId: string;
}
