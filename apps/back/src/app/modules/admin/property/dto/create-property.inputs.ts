import { Field, InputType } from "@nestjs/graphql";
import { CreatePropertyAdminInputs } from "@pishroo/dto";
import { PropertyUnitEnum } from "@pishroo/enums";

@InputType()
export class CreatePropertyAdminInputsGQL extends CreatePropertyAdminInputs {
  @Field()
  name: string;

  @Field(() => PropertyUnitEnum)
  unit: PropertyUnitEnum;

  @Field(() => Boolean, { nullable: false })
  isActive: boolean;
}
