import { ArgsType, Field } from "@nestjs/graphql";
import { GetMessageByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetMessageByIdAdminArgsGQL extends GetMessageByIdAdminArgs {
  @Field(() => String, { nullable: false })
  messageId: string;
}
