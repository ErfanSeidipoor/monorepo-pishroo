import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ColorResolver } from "./color.resolver";
import { ColorService } from "./color.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ColorService, ColorResolver],
})
export class ColorModuleAdmin {}
