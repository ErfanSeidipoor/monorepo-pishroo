import { Field, InputType } from "@nestjs/graphql";
import { UpdateCategoryAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateCategoryAdminInputsGQL extends UpdateCategoryAdminInputs {
  @Field()
  categoryId: string;

  @Field()
  name: string;

  @Field()
  isActive: boolean;
}
