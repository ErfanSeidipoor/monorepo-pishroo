import { Field, InputType } from "@nestjs/graphql";
import { CreateCustomerAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateCustomerAdminInputsGQL extends CreateCustomerAdminInputs {
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
