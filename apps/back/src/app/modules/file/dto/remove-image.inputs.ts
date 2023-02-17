import { Field, InputType } from "@nestjs/graphql";
import { RemoveImageAdminInputs } from "@pishroo/dto";

@InputType()
export class RemoveImageAdminInputsGQL extends RemoveImageAdminInputs {
  @Field()
  fileId: string;
}
