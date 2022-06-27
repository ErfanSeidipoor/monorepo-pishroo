import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class DeleteProductInput {
  @Field()
  @IsString()
  productId: string;
}
