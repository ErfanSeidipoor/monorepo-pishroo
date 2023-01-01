import { IsString } from "class-validator";

export class GetProjectByIdAdminArgs {
  @IsString()
  projectId: string;
}
