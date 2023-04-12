import { ArgsType, Field } from "@nestjs/graphql";
import { GetProductByIdPublicArgs } from "@pishroo/dto";

@ArgsType()
export class GetProductByIdPublicArgsGQL extends GetProductByIdPublicArgs {
  @Field(() => String, { nullable: false })
  identity: string;
}
