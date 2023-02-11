import { Field, InputType } from "@nestjs/graphql";
import { UpdateProductAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProductAdminInputsGQL extends UpdateProductAdminInputs {
  @Field()
  productId: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  text?: string;
}
