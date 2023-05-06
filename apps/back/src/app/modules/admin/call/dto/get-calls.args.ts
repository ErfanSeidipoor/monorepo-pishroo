import { InputType, Field } from "@nestjs/graphql";
import { GetCallsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetCallsAdminArgsGQL extends GetCallsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  userId?: string;
}
