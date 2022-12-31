import { ArgsType, Field } from "@nestjs/graphql";
import { GetTransporterAgentByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetTransporterAgentByIdAdminArgsGQL extends GetTransporterAgentByIdAdminArgs {
  @Field(() => String, { nullable: false })
  transporterAgentId: string;
}
