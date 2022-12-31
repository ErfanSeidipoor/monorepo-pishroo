import { ArgsType, Field } from "@nestjs/graphql";
import { GetTransporterAgentsAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetTransporterAgentsAdminArgsGQL extends GetTransporterAgentsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: true })
  isActive?: boolean;

  @Field(() => String, { nullable: true })
  transporterId?: string;
}
