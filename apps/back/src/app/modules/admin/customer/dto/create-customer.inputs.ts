import { Field, InputType } from "@nestjs/graphql";
import { CreateCustomerAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateCustomerAdminInputsGQL extends CreateCustomerAdminInputs {
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

  @Field({ nullable: true })
  cityId?: string;
}
