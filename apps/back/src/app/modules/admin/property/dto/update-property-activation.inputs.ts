import { Field, InputType } from "@nestjs/graphql";
import { UpdatePropertyActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdatePropertyActivationAdminInputsGQL extends UpdatePropertyActivationAdminInputs {
  @Field(() => String, { nullable: false })
  propertyId: string;

  @Field(() => Boolean, { nullable: false })
  isActive: boolean;
}
