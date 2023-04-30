import { ArgsType, Field } from "@nestjs/graphql";
import { GetTransporterActionByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetTransporterActionByIdAdminArgsGQL extends GetTransporterActionByIdAdminArgs {
  @Field(() => String, { nullable: false })
  transporterActionId: string;
}
