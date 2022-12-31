import { ArgsType, Field } from "@nestjs/graphql";
import { GetTransporterByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetTransporterByIdAdminArgsGQL extends GetTransporterByIdAdminArgs {
  @Field(() => String, { nullable: false })
  transporterId: string;
}
