import { Field, InputType } from "@nestjs/graphql";
import { UpdateTransporterAgentActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateTransporterAgentActivationAdminInputsGQL extends UpdateTransporterAgentActivationAdminInputs {
  @Field()
  transporterAgentId: string;

  @Field()
  isActive: boolean;
}
