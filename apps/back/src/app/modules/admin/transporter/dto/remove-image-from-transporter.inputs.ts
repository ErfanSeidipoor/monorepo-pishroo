import { Field, InputType } from "@nestjs/graphql";
import { RemoveImageFromTransporterAdminInputs } from "@pishroo/dto";

@InputType()
export class RemoveImageFromTransporterAdminInputsGQL extends RemoveImageFromTransporterAdminInputs {
  @Field()
  fileUseId: string;
}
