import { Field, InputType } from "@nestjs/graphql";
import { CreateTransporterAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateTransporterAdminInputsGQL extends CreateTransporterAdminInputs {
  @Field()
  name: string;

  @Field()
  phone?: string;

  @Field()
  email?: string;

  @Field()
  description: string;

  @Field()
  address: string;

  @Field()
  isActive: boolean;

  @Field()
  cityId?: string;
}
