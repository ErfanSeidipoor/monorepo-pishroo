import { Field, InputType } from "@nestjs/graphql";
import { CreateProductAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProductAdminInputsGQL extends CreateProductAdminInputs {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  isActive: boolean;

  @Field()
  text: string;
}
