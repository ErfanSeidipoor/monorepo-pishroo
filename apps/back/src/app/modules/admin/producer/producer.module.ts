import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ProducerResolver } from "./producer.resolver";
import { ProducerService } from "./producer.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProducerService, ProducerResolver],
})
export class ProducerModuleAdmin {}
