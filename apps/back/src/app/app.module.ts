import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

/* -------------------------------------------------------------------------- */
/*                                   Modules                                  */
/* -------------------------------------------------------------------------- */

import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
