import { InputType, Field } from "@nestjs/graphql";
import { GetTransportersAdminArgs } from "@pishroo/dto";

@InputType()
export class GetTransportersAdminArgsGQL extends GetTransportersAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => [String], { nullable: true })
  cityIds?: string[];

  @Field(() => [String], { nullable: true })
  provinceIds?: string[];

  @Field(() => String, { nullable: true })
  transporterId?: string;
}
