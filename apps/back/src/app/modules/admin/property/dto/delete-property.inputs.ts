import { Field, InputType } from "@nestjs/graphql";
import { DeletePropertyAdminInputs } from "@pishroo/dto";

@InputType()
export class DeletePropertyAdminInputsGQL extends DeletePropertyAdminInputs {
  @Field(() => String, { nullable: false })
  propertyId: string;
}
