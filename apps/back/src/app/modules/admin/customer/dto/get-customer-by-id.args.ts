import { ArgsType, Field } from "@nestjs/graphql";
import { GetCustomerByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetCustomerByIdAdminArgsGQL extends GetCustomerByIdAdminArgs {
  @Field(() => String, { nullable: false })
  customerId: string;
}
