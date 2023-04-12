import { IsString } from "class-validator";

export class GetProductByIdPublicArgs {
  @IsString()
  identity: string;
}
