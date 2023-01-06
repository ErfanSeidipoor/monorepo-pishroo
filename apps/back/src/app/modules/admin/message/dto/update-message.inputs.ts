import { Field, InputType } from "@nestjs/graphql";
import { UpdateMessageAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateMessageAdminInputsGQL extends UpdateMessageAdminInputs {
  @Field()
  text: string;

  @Field()
  userId: string;

  @Field()
  isActive: boolean;

  @Field(() => [String], { nullable: false })
  customerMessagesIds?: string[];
}
