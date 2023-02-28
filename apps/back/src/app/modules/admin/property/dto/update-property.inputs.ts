import { Field, InputType } from "@nestjs/graphql";
import { UpdatePropertyAdminInputs } from "@pishroo/dto";
import { PropertyUnitEnum } from "@pishroo/enums";

@InputType()
export class UpdatePropertyAdminInputsGQL extends UpdatePropertyAdminInputs {
  @Field()
  name: string;

  @Field(() => PropertyUnitEnum)
  unit: PropertyUnitEnum;

  @Field(() => Boolean, { nullable: false })
  isActive: boolean;

  @Field(() => String, { nullable: false })
  propertyId: string;
}
