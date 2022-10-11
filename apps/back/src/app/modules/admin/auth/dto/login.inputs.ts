import { Field, InputType } from "@nestjs/graphql";
import { LoginAdminInputs } from "@pishroo/dto";

@InputType()
export class LoginAdminInputsGQL extends LoginAdminInputs {
  @Field()
  username: string;

  @Field()
  password: string;
}
