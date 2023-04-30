import { ArgsType, Field } from "@nestjs/graphql";
import { GetCustomerActionByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetCustomerActionByIdAdminArgsGQL extends GetCustomerActionByIdAdminArgs {
  @Field(() => String, { nullable: false })
  customerActionId: string;
}
