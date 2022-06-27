import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '@pishroo/entities';
import { ProductResolver } from './products.resolver';
import { ProductService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProductResolver, ProductService],
})
export class ProductsModule {}
