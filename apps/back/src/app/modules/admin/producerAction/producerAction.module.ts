import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ProducerActionResolver } from "./producerAction.resolver";
import { ProducerActionService } from "./producerAction.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProducerActionService, ProducerActionResolver],
})
export class ProducerActionModuleAdmin {}
