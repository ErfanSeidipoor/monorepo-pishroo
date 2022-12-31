import { Field, InputType } from "@nestjs/graphql";
import { AddCategoriesToProductAdminInputs } from "@pishroo/dto";

@InputType()
export class AddCategoriesToProductAdminInputsGQL extends AddCategoriesToProductAdminInputs {
  @Field()
  productId: string;

  @Field(() => [String], { nullable: false })
  categories: string[];
}
