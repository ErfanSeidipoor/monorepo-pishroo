import { ArgsType, Field } from "@nestjs/graphql";
import { GetCategoriesAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetCategoriesAdminArgsGQL extends GetCategoriesAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;
}
