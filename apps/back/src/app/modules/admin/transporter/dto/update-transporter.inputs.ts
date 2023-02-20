import { Field, InputType } from "@nestjs/graphql";
import { UpdateTransporterAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateTransporterAdminInputsGQL extends UpdateTransporterAdminInputs {
  @Field(() => String, { nullable: false })
  transporterId: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  description: string;

  @Field()
  address: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  cityId?: string;
}
