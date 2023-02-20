import { Field, InputType } from "@nestjs/graphql";
import { CreateTransporterAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateTransporterAdminInputsGQL extends CreateTransporterAdminInputs {
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
