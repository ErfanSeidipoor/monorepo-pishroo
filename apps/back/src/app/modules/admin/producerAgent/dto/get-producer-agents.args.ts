import { InputType, Field } from "@nestjs/graphql";
import { GetProducerAgentsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProducerAgentsAdminArgsGQL extends GetProducerAgentsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => String, { nullable: true })
  producerId?: string;
}
