import { Field, InputType } from "@nestjs/graphql";
import { CreateTransporterAdminInputsGQL } from "./create-transporter.inputs";

@InputType()
export class UpdateTransporterAdminInputsGQL extends CreateTransporterAdminInputsGQL {
  @Field(() => String, { nullable: false })
  transporterId: string;
}
