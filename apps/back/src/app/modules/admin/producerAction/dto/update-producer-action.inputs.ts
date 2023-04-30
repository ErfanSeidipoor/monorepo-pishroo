import { Field, InputType } from "@nestjs/graphql";
import { UpdateProducerActionAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProducerActionAdminInputsGQL extends UpdateProducerActionAdminInputs {
  @Field()
  text: string;

  @Field()
  producerActionId: string;
}
