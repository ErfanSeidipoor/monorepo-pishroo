import { IsString } from "class-validator";

export class GetProducerByIdAdminArgs {
  @IsString()
  producerId: string;
}
