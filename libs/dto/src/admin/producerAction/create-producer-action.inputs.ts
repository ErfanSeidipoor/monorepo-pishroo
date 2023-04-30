import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreateProducerActionAdminInputs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  text: string;

  @IsUUID()
  producerId: string;
}
