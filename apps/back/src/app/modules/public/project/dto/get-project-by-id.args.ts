import { ArgsType, Field } from "@nestjs/graphql";
import { GetProjectByIdPublicArgs } from "@pishroo/dto";

@ArgsType()
export class GetProjectByIdPublicArgsGQL extends GetProjectByIdPublicArgs {
  @Field(() => String, { nullable: false })
  identity: string;
}
