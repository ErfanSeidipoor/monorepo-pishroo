import { Field, InputType } from "@nestjs/graphql";
import { DeleteCategoryAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteCategoryAdminInputsGQL extends DeleteCategoryAdminInputs {
  @Field()
  categoryId: string;
}
