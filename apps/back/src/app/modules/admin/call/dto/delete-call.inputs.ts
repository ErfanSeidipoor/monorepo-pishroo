import { Field, InputType } from "@nestjs/graphql";
import { DeleteCallAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteCallAdminInputsGQL extends DeleteCallAdminInputs {
  @Field()
  callId: string;
}
