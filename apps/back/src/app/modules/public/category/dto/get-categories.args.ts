import { Field, InputType } from "@nestjs/graphql";
import { GetCategoriesPublicArgs } from "@pishroo/dto";

@InputType()
export class GetCategoriesPublicArgsGQL extends GetCategoriesPublicArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";
}
