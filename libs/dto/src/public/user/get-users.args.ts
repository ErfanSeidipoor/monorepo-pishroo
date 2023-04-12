import { IsOptional, IsString } from "class-validator";

export class GetUsersPublicArgs {
  @IsOptional()
  @IsString()
  search?: string;
}
