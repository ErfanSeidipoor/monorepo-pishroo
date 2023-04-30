import { Field, InputType } from "@nestjs/graphql";
import { CreateProducerActionAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProducerActionAdminInputsGQL extends CreateProducerActionAdminInputs {
  @Field()
  text: string;

  @Field()
  producerId: string;
}
