import { Field, InputType } from "@nestjs/graphql";
import { DeleteTransporterAgentAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteTransporterAgentAdminInputsGQL extends DeleteTransporterAgentAdminInputs {
  @Field()
  transporterAgentId: string;
}
