import { Field, InputType } from "@nestjs/graphql";
import { UpdateCustomerAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateCustomerAdminInputsGQL extends UpdateCustomerAdminInputs {
  @Field(() => String, { nullable: false })
  customerId: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  jobTitle: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  officePhone?: string;

  @Field()
  isActive: boolean;

  @Field()
  cityId: string;
}
