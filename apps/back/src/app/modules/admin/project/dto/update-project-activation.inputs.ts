import { Field, InputType } from "@nestjs/graphql";
import { UpdateProjectActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProjectActivationAdminInputsGQL extends UpdateProjectActivationAdminInputs {
  @Field()
  projectId: string;

  @Field()
  isActive: boolean;
}
