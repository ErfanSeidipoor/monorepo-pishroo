import { Field, InputType } from "@nestjs/graphql";
import { DeleteColorAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteColorAdminInputsGQL extends DeleteColorAdminInputs {
  @Field()
  colorId: string;
}
