import { IsUUID } from "class-validator";

export class GetProducerActionByIdAdminArgs {
  @IsUUID()
  producerActionId: string;
}
