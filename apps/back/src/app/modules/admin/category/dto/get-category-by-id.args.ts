import { ArgsType, Field } from "@nestjs/graphql";
import { GetCategoryByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetCategoryByIdAdminArgsGQL extends GetCategoryByIdAdminArgs {
  @Field(() => String, { nullable: false })
  categoryId: string;
}
