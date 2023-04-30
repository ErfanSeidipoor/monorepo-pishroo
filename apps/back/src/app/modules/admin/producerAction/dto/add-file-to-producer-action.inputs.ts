import { Field, InputType } from "@nestjs/graphql";
import { AddFileToProducerActionAdminInputs } from "@pishroo/dto";

@InputType()
export class AddFileToProducerActionAdminInputsGQL extends AddFileToProducerActionAdminInputs {
  @Field()
  fileId: string;

  @Field()
  producerActionId: string;
}
