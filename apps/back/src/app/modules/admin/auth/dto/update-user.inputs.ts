import { Field, InputType } from "@nestjs/graphql";
import { UpdateUserAdminInputs } from "@pishroo/dto";
import { UserRoleEnum } from "@back/enums";

@InputType()
export class UpdateUserAdminInputsGQL extends UpdateUserAdminInputs {
  @Field()
  userId: string;

  @Field()
  username: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field(() => [UserRoleEnum], { nullable: false })
  roles: UserRoleEnum[];
}
