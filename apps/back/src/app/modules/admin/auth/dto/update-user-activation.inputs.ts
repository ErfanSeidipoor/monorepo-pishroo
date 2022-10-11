import { Field, InputType } from "@nestjs/graphql";
import { UpdateUserActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateUserActivationAdminInputsGQL extends UpdateUserActivationAdminInputs {
  @Field()
  userId: string;

  @Field()
  isActive: boolean;
}
