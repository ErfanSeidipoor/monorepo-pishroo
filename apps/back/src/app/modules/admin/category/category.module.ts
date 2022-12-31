import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [CategoryService, CategoryResolver],
})
export class CategoryModuleAdmin {}
