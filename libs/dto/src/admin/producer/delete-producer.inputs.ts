import { IsString } from "class-validator";

export class DeleteProducerAdminInputs {
  @IsString()
  producerId: string;
}
