import { ArgsType, Field } from "@nestjs/graphql";
import { GetMessagesAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetMessagesAdminArgsGQL extends GetMessagesAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: true })
  isActive?: boolean;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => [String], { nullable: true })
  customerId?: string;
}
