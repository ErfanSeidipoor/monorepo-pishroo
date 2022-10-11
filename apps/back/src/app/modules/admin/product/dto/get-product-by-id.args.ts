import { ArgsType, Field } from "@nestjs/graphql";
import { GetProductByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProductByIdAdminArgsGQL extends GetProductByIdAdminArgs {
  @Field(() => String, { nullable: false })
  productId: string;
}
