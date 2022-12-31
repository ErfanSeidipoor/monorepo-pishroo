import { Field, InputType } from "@nestjs/graphql";
import { AddColorsToProductAdminInputs } from "@pishroo/dto";

@InputType()
export class AddColorsToProductAdminInputsGQL extends AddColorsToProductAdminInputs {
  @Field()
  productId: string;

  @Field(() => [String], { nullable: false })
  colorIds: string[];
}
