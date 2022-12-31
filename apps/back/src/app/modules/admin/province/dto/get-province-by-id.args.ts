import { ArgsType, Field } from "@nestjs/graphql";
import { GetProvinceByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetProvinceByIdAdminArgsGQL extends GetProvinceByIdAdminArgs {
  @Field(() => String, { nullable: false })
  provinceId: string;
}
