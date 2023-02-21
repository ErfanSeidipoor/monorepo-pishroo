import { Field, InputType } from "@nestjs/graphql";
import { UpdateProducerAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProducerAdminInputsGQL extends UpdateProducerAdminInputs {
  @Field(() => String, { nullable: false })
  producerId: string;

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
