import { IsUUID } from "class-validator";
import { CreateTransporterAdminInputs } from "./create-transporter.inputs";

export class UpdateTransporterAdminInputs extends CreateTransporterAdminInputs {
  @IsUUID()
  transporterId: string;
}
