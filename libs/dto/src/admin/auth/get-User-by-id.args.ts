import { IsUUID } from "class-validator";

export class GetUserByIdAdminArgs {
  @IsUUID()
  userId: string;
}
