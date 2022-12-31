import { Field, InputType } from "@nestjs/graphql";
import { UpdateProducerAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProducerAdminInputsGQL extends UpdateProducerAdminInputs {
  @Field(() => String, { nullable: false })
  producerId: string;

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
