import { ArgsType, Field } from "@nestjs/graphql";
import { GetCallByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetCallByIdAdminArgsGQL extends GetCallByIdAdminArgs {
  @Field(() => String, { nullable: false })
  callId: string;
}
