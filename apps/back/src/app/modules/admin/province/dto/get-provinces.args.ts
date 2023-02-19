import { Field, InputType } from "@nestjs/graphql";
import { GetProvincesAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProvincesAdminArgsGQL extends GetProvincesAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => String, { nullable: true })
  provinceId?: string = "";
}
