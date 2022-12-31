import { Field, InputType } from "@nestjs/graphql";
import { AddImageToProducerAdminInputs } from "@pishroo/dto";

@InputType()
export class AddImageToProducerAdminInputsGQL extends AddImageToProducerAdminInputs {
  @Field()
  fileId: string;

  @Field()
  producerId: string;
}
