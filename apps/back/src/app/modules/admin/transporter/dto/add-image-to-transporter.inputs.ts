import { Field, InputType } from "@nestjs/graphql";
import { AddImageToTransporterAdminInputs } from "@pishroo/dto";

@InputType()
export class AddImageToTransporterAdminInputsGQL extends AddImageToTransporterAdminInputs {
  @Field()
  fileId: string;

  @Field()
  transporterId: string;
}
