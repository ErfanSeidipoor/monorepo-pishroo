import { Field, InputType } from "@nestjs/graphql";
import { GetProductsPublicArgs } from "@pishroo/dto";

@InputType()
export class GetProductsPublicArgsGQL extends GetProductsPublicArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: true })
  categoryIdentity?: string;
}
