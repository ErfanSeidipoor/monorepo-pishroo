import { IsString } from "class-validator";

export class GetProducerAgentByIdAdminArgs {
  @IsString()
  producerAgentId: string;
}
