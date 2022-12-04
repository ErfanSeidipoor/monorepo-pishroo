import { Field, InputType } from "@nestjs/graphql";
import { UpdatePropertyOfProductAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdatePropertyOfProductAdminInputsGQL extends UpdatePropertyOfProductAdminInputs {
  @Field()
  productPropertyId: string;

  @Field()
  value: string;
}
