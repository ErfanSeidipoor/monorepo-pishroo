import { Field, InputType } from "@nestjs/graphql";
import { GetCustomersAdminArgs } from "@pishroo/dto";

@InputType()
export class GetCustomersAdminArgsGQL extends GetCustomersAdminArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => [String], { nullable: true })
  cityIds?: string[];

  @Field(() => [String], { nullable: true })
  provinceIds?: string[];
}
