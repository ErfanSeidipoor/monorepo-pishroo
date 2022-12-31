import { Field, InputType } from "@nestjs/graphql";
import { CreateColorAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateColorAdminInputsGQL extends CreateColorAdminInputs {
  @Field()
  name: string;

  @Field()
  value: string;
}
