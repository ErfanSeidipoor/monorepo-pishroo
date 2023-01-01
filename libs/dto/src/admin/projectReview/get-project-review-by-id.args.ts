import { IsString, IsUUID } from "class-validator";

export class GetProjectReviewByIdAdminArgs {
  @IsString()
  @IsUUID()
  projectReviewId: string;
}
