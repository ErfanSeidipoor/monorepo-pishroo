import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { PropertyResolver } from "./property.resolver";
import { PropertyService } from "./property.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [PropertyService, PropertyResolver],
})
export class PropertyModuleAdmin {}
