import { IsString } from "class-validator";

export class DeleteProjectAdminInputs {
  @IsString()
  projectId: string;
}
