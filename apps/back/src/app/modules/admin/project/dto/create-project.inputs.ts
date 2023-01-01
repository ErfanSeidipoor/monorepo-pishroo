import { Field, InputType } from "@nestjs/graphql";
import { CreateProjectAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateProjectAdminInputsGQL extends CreateProjectAdminInputs {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  isActive: boolean;

  @Field()
  description?: string;

  @Field()
  lat?: number;

  @Field()
  long?: number;

  @Field()
  cityId?: string;
}
