import { InputType, Field } from "@nestjs/graphql";
import { GetColorsAdminArgs } from "@pishroo/dto";

@InputType()
export class GetColorsAdminArgsGQL extends GetColorsAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => String, { nullable: true })
  value?: string = "";
}
