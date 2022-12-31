import { Field } from "@nestjs/graphql";
import { IsBoolean, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategoryAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsBoolean()
  isActive: boolean;
}
