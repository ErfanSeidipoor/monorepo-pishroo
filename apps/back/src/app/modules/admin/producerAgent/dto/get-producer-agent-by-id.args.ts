import { ArgsType, Field } from "@nestjs/graphql";
import { GetProducerAgentByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProducerAgentByIdAdminArgsGQL extends GetProducerAgentByIdAdminArgs {
  @Field(() => String, { nullable: false })
  producerAgentId: string;
}
