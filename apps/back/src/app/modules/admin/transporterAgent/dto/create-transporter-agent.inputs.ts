import { Field, InputType } from "@nestjs/graphql";
import { CreateTransporterAgentAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateTransporterAgentAdminInputsGQL extends CreateTransporterAgentAdminInputs {
  @Field()
  transporterId: string;

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
