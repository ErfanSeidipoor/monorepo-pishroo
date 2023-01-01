import { Field, InputType } from "@nestjs/graphql";
import { RemoveImageFromProjectAdminInputs } from "@pishroo/dto";

@InputType()
export class RemoveImageFromProjectAdminInputsGQL extends RemoveImageFromProjectAdminInputs {
  @Field()
  fileUseId: string;
}
