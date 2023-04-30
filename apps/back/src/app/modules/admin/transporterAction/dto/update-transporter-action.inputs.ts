import { Field, InputType } from "@nestjs/graphql";
import { UpdateTransporterActionAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateTransporterActionAdminInputsGQL extends UpdateTransporterActionAdminInputs {
  @Field()
  text: string;

  @Field()
  transporterActionId: string;
}
