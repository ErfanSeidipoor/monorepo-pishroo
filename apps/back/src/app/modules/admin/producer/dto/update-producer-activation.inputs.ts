import { Field, InputType } from "@nestjs/graphql";
import { UpdateProducerActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProducerActivationAdminInputsGQL extends UpdateProducerActivationAdminInputs {
  @Field()
  producerId: string;

  @Field()
  isActive: boolean;
}
