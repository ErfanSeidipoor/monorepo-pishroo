import { Field, InputType } from "@nestjs/graphql";
import { AddPropertyToProductAdminInputs } from "@pishroo/dto";

@InputType()
export class AddPropertyToProductAdminInputsGQL extends AddPropertyToProductAdminInputs {
  @Field()
  propertyId: string;

  @Field()
  productId: string;

  @Field()
  value: string;
}
