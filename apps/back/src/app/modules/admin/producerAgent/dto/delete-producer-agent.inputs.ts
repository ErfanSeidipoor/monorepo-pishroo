import { Field, InputType } from "@nestjs/graphql";
import { DeleteProducerAgentAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteProducerAgentAdminInputsGQL extends DeleteProducerAgentAdminInputs {
  @Field()
  producerAgentId: string;
}
