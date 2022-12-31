import { ArgsType, Field } from "@nestjs/graphql";
import { GetProductsAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProductsAdminArgsGQL extends GetProductsAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => String, { nullable: true })
  slug?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;
}
