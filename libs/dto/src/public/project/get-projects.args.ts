import { IsOptional, IsString } from "class-validator";

export class GetProjectsPublicArgs {
  @IsOptional()
  @IsString()
  search?: string;
}
