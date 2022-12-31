import { Field, InputType } from "@nestjs/graphql";
import { CreateProductAdminInputsGQL } from "./create-product.inputs";

@InputType()
export class UpdateProductAdminInputsGQL extends CreateProductAdminInputsGQL {
  @Field()
  productId: string;
}
