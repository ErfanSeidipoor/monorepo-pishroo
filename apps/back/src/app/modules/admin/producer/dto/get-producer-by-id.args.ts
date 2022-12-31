import { ArgsType, Field } from "@nestjs/graphql";
import { GetProducerByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProducerByIdAdminArgsGQL extends GetProducerByIdAdminArgs {
  @Field(() => String, { nullable: false })
  producerId: string;
}
