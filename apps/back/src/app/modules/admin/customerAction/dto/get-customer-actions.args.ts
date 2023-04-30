import { InputType, Field } from "@nestjs/graphql";
import { GetCustomerActionsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetCustomerActionsAdminArgsGQL extends GetCustomerActionsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: false })
  customerId: string;
}
