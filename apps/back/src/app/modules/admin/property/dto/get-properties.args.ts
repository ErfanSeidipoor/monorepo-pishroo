import { InputType, Field } from "@nestjs/graphql";
import { GetPropertiesAdminArgs } from "@pishroo/dto";
import { PropertyUnitEnum } from "@back/enums";

@InputType()
export class GetPropertiesAdminArgsGQL extends GetPropertiesAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => [PropertyUnitEnum], { nullable: true })
  units?: PropertyUnitEnum[] = [];

  @Field(() => String, { nullable: true })
  propertyId?: string;
}
