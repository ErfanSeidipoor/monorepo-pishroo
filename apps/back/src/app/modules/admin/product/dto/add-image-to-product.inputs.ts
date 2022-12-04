import { Field, InputType } from "@nestjs/graphql";
import { AddImageToProductAdminInputs } from "@pishroo/dto";

@InputType()
export class AddImageToProductAdminInputsGQL extends AddImageToProductAdminInputs {
  @Field()
  fileId: string;

  @Field()
  productId: string;
}
