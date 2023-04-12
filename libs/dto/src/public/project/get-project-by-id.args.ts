import { IsString } from "class-validator";

export class GetProjectByIdPublicArgs {
  @IsString()
  identity: string;
}
