import { ArgsType, Field } from "@nestjs/graphql";
import { GetFileByIdAdminArgs } from "@pishroo/dto";

@ArgsType()
export class GetFileByIdAdminArgsGQL extends GetFileByIdAdminArgs {
  @Field(() => String, { nullable: false })
  fileId: string;
}
