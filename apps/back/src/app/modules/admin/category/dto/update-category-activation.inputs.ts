import { Field, InputType } from "@nestjs/graphql";
import { UpdateCategoryActivationAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateCategoryActivationAdminInputsGQL extends UpdateCategoryActivationAdminInputs {
  @Field()
  categoryId: string;

  @Field()
  isActive: boolean;
}
