import { Field, InputType } from "@nestjs/graphql";
import { InsertDailyCallsAdminInputs } from "@pishroo/dto";

@InputType()
class CallItem {
  @Field()
  timestamp: string;

  @Field()
  newPhone: string;
}

@InputType()
export class InsertDailyCallsAdminInputsGQL extends InsertDailyCallsAdminInputs {
  @Field(() => [CallItem], { nullable: false })
  calls: CallItem[];
}
