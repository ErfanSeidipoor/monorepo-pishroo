import { InputType, Field } from "@nestjs/graphql";
import { GetMessagesAdminArgs } from "@pishroo/dto";

@InputType()
export class GetMessagesAdminArgsGQL extends GetMessagesAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => Boolean, { nullable: true })
  isSubmitted?: boolean;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => [String], { nullable: true })
  customerId?: string;
}
