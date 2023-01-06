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

  @Field()
  email?: string;

  @Field()
  jobTitle: string;

  @Field()
  phone?: string;

  @Field()
  officePhone?: string;

  @Field()
  isActive: boolean;

  @Field()
  cityId?: string;
}
