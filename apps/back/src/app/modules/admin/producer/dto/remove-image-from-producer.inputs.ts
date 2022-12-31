import { Field, InputType } from "@nestjs/graphql";
import { RemoveImageFromProducerAdminInputs } from "@pishroo/dto";

@InputType()
export class RemoveImageFromProducerAdminInputsGQL extends RemoveImageFromProducerAdminInputs {
  @Field()
  fileUseId: string;
}
