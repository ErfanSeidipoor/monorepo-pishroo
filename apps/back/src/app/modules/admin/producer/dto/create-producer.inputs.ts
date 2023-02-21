import { Field, InputType } from "@nestjs/graphql";
import { CreateProducerAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProducerAdminInputsGQL extends CreateProducerAdminInputs {
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
