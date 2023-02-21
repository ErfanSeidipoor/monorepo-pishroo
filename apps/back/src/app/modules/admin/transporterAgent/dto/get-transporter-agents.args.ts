import { InputType, Field } from "@nestjs/graphql";
import { GetTransporterAgentsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetTransporterAgentsAdminArgsGQL extends GetTransporterAgentsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => String, { nullable: true })
  transporterId?: string;
}
