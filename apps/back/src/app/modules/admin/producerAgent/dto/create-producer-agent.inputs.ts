import { Field, InputType } from "@nestjs/graphql";
import { CreateProducerAgentAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProducerAgentAdminInputsGQL extends CreateProducerAgentAdminInputs {
  @Field()
  producerId: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field()
  description: string;

  @Field()
  isActive: boolean;
}
