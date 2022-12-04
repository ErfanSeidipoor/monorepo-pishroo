import { Field, InputType } from "@nestjs/graphql";
import { CreatePropertyAdminInputsGQL } from "./create-property.inputs";

@InputType()
export class UpdatePropertyAdminInputsGQL extends CreatePropertyAdminInputsGQL {
  @Field(() => String, { nullable: false })
  propertyId: string;
}
