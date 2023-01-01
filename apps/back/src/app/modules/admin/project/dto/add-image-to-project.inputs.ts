import { Field, InputType } from "@nestjs/graphql";
import { AddImageToProjectAdminInputs } from "@pishroo/dto";

@InputType()
export class AddImageToProjectAdminInputsGQL extends AddImageToProjectAdminInputs {
  @Field()
  fileId: string;

  @Field()
  projectId: string;
}
