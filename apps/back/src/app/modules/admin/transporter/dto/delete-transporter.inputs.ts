import { Field, InputType } from "@nestjs/graphql";
import { DeleteTransporterAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteTransporterAdminInputsGQL extends DeleteTransporterAdminInputs {
  @Field()
  transporterId: string;
}
