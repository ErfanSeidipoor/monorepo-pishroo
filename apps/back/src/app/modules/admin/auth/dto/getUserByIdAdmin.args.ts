import { ArgsType, Field } from "@nestjs/graphql";
import { GetUserByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetUserByIdAdminArgsGQL extends GetUserByIdAdminArgs {
  @Field(() => String, { nullable: false })
  userId: string;
}
