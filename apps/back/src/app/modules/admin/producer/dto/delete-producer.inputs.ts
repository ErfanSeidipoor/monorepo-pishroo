import { Field, InputType } from "@nestjs/graphql";
import { DeleteProducerAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteProducerAdminInputsGQL extends DeleteProducerAdminInputs {
  @Field()
  producerId: string;
}
