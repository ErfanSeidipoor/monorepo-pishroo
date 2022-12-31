import { Field, InputType } from "@nestjs/graphql";
import { RemovePropertyFromProductAdminInputs } from "@pishroo/dto";

@InputType()
export class RemovePropertyFromProductAdminInputsGQL extends RemovePropertyFromProductAdminInputs {
  @Field()
  productPropertyId: string;
}
