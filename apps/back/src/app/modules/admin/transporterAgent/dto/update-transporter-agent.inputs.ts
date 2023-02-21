import { Field, InputType } from "@nestjs/graphql";
import { UpdateTransporterAgentAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateTransporterAgentAdminInputsGQL extends UpdateTransporterAgentAdminInputs {
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

  @Field(() => String, { nullable: false })
  transporterAgentId: string;
}
