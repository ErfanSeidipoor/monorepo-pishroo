import { Field, InputType } from "@nestjs/graphql";
import { CreateUserAdminInputs } from "@pishroo/dto";
import { UserRoleEnum } from "@back/enums";

@InputType()
export class CreateUserAdminInputsGQL extends CreateUserAdminInputs {
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

  @Field()
  isActive: boolean;

  @Field()
  password: string;

  @Field(() => [UserRoleEnum], { nullable: false })
  roles: UserRoleEnum[];
}
