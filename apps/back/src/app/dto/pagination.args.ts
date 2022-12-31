import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PaginationArgs } from "@pishroo/dto";

@ArgsType()
export class PaginationArgsGQL extends PaginationArgs {
  @Field(() => Int, { nullable: true })
  limit?: number = 10;

  @Field(() => Int, { nullable: true })
  page?: number = 1;
}
