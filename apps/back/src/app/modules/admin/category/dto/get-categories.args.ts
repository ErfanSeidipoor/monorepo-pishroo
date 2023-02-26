import { InputType, Field } from "@nestjs/graphql";
import { GetCategoriesAdminArgs } from "@pishroo/dto";

@InputType()
export class GetCategoriesAdminArgsGQL extends GetCategoriesAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;
}
