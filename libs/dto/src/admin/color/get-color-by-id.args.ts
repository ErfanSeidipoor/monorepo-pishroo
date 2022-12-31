import { IsString, IsUUID } from "class-validator";

export class GetColorByIdAdminArgs {
  @IsString()
  @IsUUID()
  colorId: string;
}
