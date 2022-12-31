import { IsString } from "class-validator";

export class DeleteProducerAgentAdminInputs {
  @IsString()
  producerAgentId: string;
}
