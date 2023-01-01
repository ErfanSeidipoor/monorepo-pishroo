import { Field, InputType } from "@nestjs/graphql";
import { DeleteProjectAdminInputs } from "@pishroo/dto";

@InputType()
export class DeleteProjectAdminInputsGQL extends DeleteProjectAdminInputs {
  @Field()
  projectId: string;
}
