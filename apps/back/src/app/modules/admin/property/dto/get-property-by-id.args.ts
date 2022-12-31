import { ArgsType, Field } from "@nestjs/graphql";
import { GetPropertyByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetPropertyByIdAdminArgsGQL extends GetPropertyByIdAdminArgs {
  @Field(() => String, { nullable: false })
  propertyId: string;
}
