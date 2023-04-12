import { Field, InputType } from "@nestjs/graphql";
import { GetUsersPublicArgs } from "@pishroo/dto";

@InputType()
export class GetUsersPublicArgsGQL extends GetUsersPublicArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";
}
