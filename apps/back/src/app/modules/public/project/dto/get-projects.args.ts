import { InputType, Field } from "@nestjs/graphql";
import { GetProjectsPublicArgs } from "@pishroo/dto";

@InputType()
export class GetProjectsPublicArgsGQL extends GetProjectsPublicArgs {
  @Field(() => String, { nullable: true })
  search?: string = "";
}
