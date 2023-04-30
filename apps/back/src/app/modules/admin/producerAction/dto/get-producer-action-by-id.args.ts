import { ArgsType, Field } from "@nestjs/graphql";
import { GetProducerActionByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProducerActionByIdAdminArgsGQL extends GetProducerActionByIdAdminArgs {
  @Field(() => String, { nullable: false })
  producerActionId: string;
}
