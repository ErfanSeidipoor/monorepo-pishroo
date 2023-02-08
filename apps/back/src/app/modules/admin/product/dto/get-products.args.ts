import { Field, InputType } from "@nestjs/graphql";
import { GetProductsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProductsAdminArgsGQL extends GetProductsAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => String, { nullable: true })
  slug?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;
}
