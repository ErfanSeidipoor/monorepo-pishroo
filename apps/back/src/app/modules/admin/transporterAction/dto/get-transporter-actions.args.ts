import { InputType, Field } from "@nestjs/graphql";
import { GetTransporterActionsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetTransporterActionsAdminArgsGQL extends GetTransporterActionsAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => String, { nullable: false })
  transporterId: string;
}
