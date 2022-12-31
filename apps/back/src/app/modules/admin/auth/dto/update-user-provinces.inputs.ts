import { Field, InputType } from "@nestjs/graphql";
import { UpdateUserProvincesAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateUserProvincesAdminInputsGQL extends UpdateUserProvincesAdminInputs {
  @Field()
  userId: string;

  @Field(() => [String], { nullable: false })
  provinceIds: string[];
}
