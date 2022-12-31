import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ProvinceResolver } from "./province.resolver";
import { ProvinceService } from "./province.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProvinceService, ProvinceResolver],
})
export class ProvinceModuleAdmin {}
