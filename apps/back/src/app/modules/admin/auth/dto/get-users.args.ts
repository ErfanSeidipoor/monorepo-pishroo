import { ArgsType, Field } from "@nestjs/graphql";
import { GetUsersAdminArgs } from "@pishroo/dto";
import { UserRoleEnum } from "@back/enums";

@ArgsType()
export class GetUsersAdminArgsGQL extends GetUsersAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => String, { nullable: true })
  email?: string = "";

  @Field(() => String, { nullable: true })
  phone?: string = "";

  @Field(() => [UserRoleEnum], { nullable: true })
  roles?: UserRoleEnum[] = [];

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;
}
