import { ArgsType, Field } from "@nestjs/graphql";
import { GetPropertiesAdminArgs } from "@pishroo/dto";
import { PropertyUnitEnum } from "@pishroo/enums";

@ArgsType()
export class GetPropertiesAdminArgsGQL extends GetPropertiesAdminArgs {
  @Field(() => String, { nullable: true })
  name?: string = "";

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => [PropertyUnitEnum], { nullable: true })
  units?: PropertyUnitEnum[] = [];
}
