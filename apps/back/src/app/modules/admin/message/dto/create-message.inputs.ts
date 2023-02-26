import { Field, InputType } from "@nestjs/graphql";
import { CreateMessageAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateMessageAdminInputsGQL extends CreateMessageAdminInputs {
  @Field()
  text: string;

  @Field()
  userId: string;

  @Field()
  isActive: boolean;

  @Field(() => [String], { nullable: false })
  customerIds: string[];
}
