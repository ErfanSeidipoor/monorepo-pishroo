import { Field, InputType } from "@nestjs/graphql";
import { CreateCallAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateCallAdminInputsGQL extends CreateCallAdminInputs {
  @Field()
  description: string;

  @Field()
  newPhone: string;
}
