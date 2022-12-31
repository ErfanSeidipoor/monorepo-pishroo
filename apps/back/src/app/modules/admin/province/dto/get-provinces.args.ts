import { ArgsType, Field } from "@nestjs/graphql";
import { GetProvincesAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProvincesAdminArgsGQL extends GetProvincesAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";
}
