import { IsString, IsUUID } from "class-validator";

export class DeleteProjectReviewAdminInputs {
  @IsString()
  @IsUUID()
  projectReviewId: string;
}
