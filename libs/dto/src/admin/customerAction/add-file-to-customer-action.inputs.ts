import { IsUUID } from "class-validator";

export class AddFileToCustomerActionAdminInputs {
  @IsUUID()
  fileId: string;

  @IsUUID()
  customerActionId: string;
}
