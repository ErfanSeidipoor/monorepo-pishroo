import { IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class GetProjectReviewsAdminArgs {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  reviewer?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  text?: string;

  @IsOptional()
  @IsUUID()
  projectId?: string;
}
