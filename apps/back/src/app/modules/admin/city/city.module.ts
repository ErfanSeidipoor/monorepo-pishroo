import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { CityResolver } from "./city.resolver";
import { CityService } from "./city.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [CityService, CityResolver],
})
export class CityModuleAdmin {}
