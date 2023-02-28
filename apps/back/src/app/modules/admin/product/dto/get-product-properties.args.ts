import { Field, InputType } from "@nestjs/graphql";
import { GetProductPropertiesAdminArgs } from "@pishroo/dto";

@InputType()
export class GetProductPropertiesAdminArgsGQL extends GetProductPropertiesAdminArgs {
  @Field(() => String, { nullable: false })
  productId: string;

  @Field(() => String, { nullable: true })
  name?: string = "";
}
