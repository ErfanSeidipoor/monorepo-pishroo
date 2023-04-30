import { Field, InputType } from "@nestjs/graphql";
import { AddFileToTransporterActionAdminInputs } from "@pishroo/dto";

@InputType()
export class AddFileToTransporterActionAdminInputsGQL extends AddFileToTransporterActionAdminInputs {
  @Field()
  fileId: string;

  @Field()
  transporterActionId: string;
}
