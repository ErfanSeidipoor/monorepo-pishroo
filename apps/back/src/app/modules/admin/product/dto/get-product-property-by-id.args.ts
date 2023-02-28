import { ArgsType, Field } from "@nestjs/graphql";
import { GetProductPropertyByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProductPropertyByIdAdminArgsGQL extends GetProductPropertyByIdAdminArgs {
  @Field(() => String, { nullable: false })
  productPropertyId: string;
}
