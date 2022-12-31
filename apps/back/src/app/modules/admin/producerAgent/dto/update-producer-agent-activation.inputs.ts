import { Field, InputType } from "@nestjs/graphql";
import { UpdateProducerAgentActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProducerAgentActivationAdminInputsGQL extends UpdateProducerAgentActivationAdminInputs {
  @Field()
  producerAgentId: string;

  @Field()
  isActive: boolean;
}
