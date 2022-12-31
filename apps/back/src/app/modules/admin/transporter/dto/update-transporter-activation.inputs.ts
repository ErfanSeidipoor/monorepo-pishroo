import { Field, InputType } from "@nestjs/graphql";
import { UpdateTransporterActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateTransporterActivationAdminInputsGQL extends UpdateTransporterActivationAdminInputs {
  @Field()
  transporterId: string;

  @Field()
  isActive: boolean;
}
