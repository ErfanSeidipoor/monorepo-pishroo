import { Field, InputType } from "@nestjs/graphql";
import { UpdateProducerAgentAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProducerAgentAdminInputsGQL extends UpdateProducerAgentAdminInputs {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email?: string;

  @Field()
  phone?: string;

  @Field()
  description: string;

  @Field()
  isActive: boolean;

  @Field(() => String, { nullable: false })
  producerAgentId: string;
}
