import { Field, InputType } from "@nestjs/graphql";
import { DeleteProductAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteProductAdminInputsGQL extends DeleteProductAdminInputs {
  @Field()
  productId: string;
}
