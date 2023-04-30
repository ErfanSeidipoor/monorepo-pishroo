import { InputType, Field } from "@nestjs/graphql";
import { GetProducerActionsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProducerActionsAdminArgsGQL extends GetProducerActionsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: false })
  producerId: string;
}
