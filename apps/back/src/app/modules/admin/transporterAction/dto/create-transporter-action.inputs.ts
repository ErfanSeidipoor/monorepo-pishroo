import { Field, InputType } from "@nestjs/graphql";
import { CreateTransporterActionAdminInputs } from "@pishroo/dto";

@InputType()
export class CreateTransporterActionAdminInputsGQL extends CreateTransporterActionAdminInputs {
  @Field()
  text: string;

  @Field()
  transporterId: string;
}
