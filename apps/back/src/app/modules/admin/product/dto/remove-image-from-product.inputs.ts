import { Field, InputType } from "@nestjs/graphql";
import { RemoveImageFromProductAdminInputs } from "@pishroo/dto";

@InputType()
export class RemoveImageFromProductAdminInputsGQL extends RemoveImageFromProductAdminInputs {
  @Field()
  fileUseId: string;
}
