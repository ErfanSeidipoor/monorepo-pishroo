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

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  lat?: number;

  @Field({ nullable: true })
  long?: number;

  @Field({ nullable: true })
  cityId?: string;
}
