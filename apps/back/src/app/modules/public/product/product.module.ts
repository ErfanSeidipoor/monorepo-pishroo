import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProductService, ProductResolver],
})
export class ProductModulePublic {}
