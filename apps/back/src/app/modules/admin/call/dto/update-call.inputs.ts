import { Field, InputType } from "@nestjs/graphql";
import { UpdateCallAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateCallAdminInputsGQL extends UpdateCallAdminInputs {
  @Field()
  callId: string;

  @Field()
  description: string;

  @Field()
  newPhone: string;
}
