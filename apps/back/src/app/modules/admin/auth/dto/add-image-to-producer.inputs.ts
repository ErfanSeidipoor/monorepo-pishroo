import { Field, InputType } from "@nestjs/graphql";
import { AddImageToUserAdminInputs } from "@pishroo/dto";

@InputType()
export class AddImageToUserAdminInputsGQL extends AddImageToUserAdminInputs {
  @Field()
  fileId: string;

  @Field()
  userId: string;
}
