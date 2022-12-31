import { ArgsType, Field } from "@nestjs/graphql";
import { GetColorByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetColorByIdAdminArgsGQL extends GetColorByIdAdminArgs {
  @Field(() => String, { nullable: false })
  colorId: string;
}
