import {
  IsBoolean,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateProjectReviewAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  reviewer: string;

  @IsUUID()
  fileId: string;

  @IsString()
  @MinLength(3)
  @MaxLength(200)
  text: string;

  @IsString()
  @IsUUID()
  projectId: string;

  @IsBoolean()
  isActive: boolean;

  @IsUUID()
  projectReviewId: string;
}
