import { Field, InputType } from "@nestjs/graphql";
import { CreateProducerAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProducerAdminInputsGQL extends CreateProducerAdminInputs {
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
