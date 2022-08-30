import { ArgsType, Field } from "@nestjs/graphql";
import { GetUsersAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetUsersAdminArgsGQL extends GetUsersAdminArgs {
  @Field()
  page?: number;

  @Field()
  limit?: number;
}
