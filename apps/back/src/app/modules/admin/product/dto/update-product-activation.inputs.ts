import { Field, InputType } from "@nestjs/graphql";
import { UpdateProductActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProductActivationAdminInputsGQL extends UpdateProductActivationAdminInputs {
  @Field()
  productId: string;

  @Field()
  isActive: boolean;
}
