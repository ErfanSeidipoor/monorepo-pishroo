import { Field, InputType } from "@nestjs/graphql";
import { CreateCategoryAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateCategoryAdminInputsGQL extends CreateCategoryAdminInputs {
  @Field()
  name: string;

  @Field()
  isActive: boolean;
}
