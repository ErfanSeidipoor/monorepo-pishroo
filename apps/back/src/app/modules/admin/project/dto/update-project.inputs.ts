import { Field, InputType } from "@nestjs/graphql";
import { UpdateProjectAdminInputs } from "@pishroo/dto";

@InputType()
export class UpdateProjectAdminInputsGQL extends UpdateProjectAdminInputs {
  @Field(() => String, { nullable: false })
  projectId: string;

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
