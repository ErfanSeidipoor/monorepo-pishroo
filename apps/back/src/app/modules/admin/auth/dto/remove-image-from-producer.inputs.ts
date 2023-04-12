import { Field, InputType } from "@nestjs/graphql";
import { RemoveImageFromUserAdminInputs } from "@pishroo/dto";

@InputType()
export class RemoveImageFromUserAdminInputsGQL extends RemoveImageFromUserAdminInputs {
  @Field()
  fileUseId: string;
}
