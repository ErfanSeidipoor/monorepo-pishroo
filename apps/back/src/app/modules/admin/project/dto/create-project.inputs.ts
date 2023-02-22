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

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  lat?: number;

  @Field({ nullable: true })
  long?: number;

  @Field({ nullable: true })
  cityId?: string;
}
