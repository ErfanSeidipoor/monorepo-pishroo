import { Field, InputType } from "@nestjs/graphql";
import { UpdateColorAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateColorAdminInputsGQL extends UpdateColorAdminInputs {
  @Field()
  name: string;

  @Field()
  value: string;

  @Field()
  colorId: string;
}
