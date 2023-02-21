import { InputType, Field } from "@nestjs/graphql";
import { GetProducersAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProducersAdminArgsGQL extends GetProducersAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => [String], { nullable: true })
  cityIds?: string[];

  @Field(() => [String], { nullable: true })
  provinceIds?: string[];

  @Field(() => String, { nullable: true })
  producerId?: string;
}
