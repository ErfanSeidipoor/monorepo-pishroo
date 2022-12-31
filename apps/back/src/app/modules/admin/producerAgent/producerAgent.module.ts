import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ProducerAgentResolver } from "./producerAgent.resolver";
import { ProducerAgentService } from "./producerAgent.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProducerAgentService, ProducerAgentResolver],
})
export class ProducerAgentModuleAdmin {}
