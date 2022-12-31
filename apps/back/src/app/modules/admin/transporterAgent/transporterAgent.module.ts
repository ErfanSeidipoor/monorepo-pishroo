import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { TransporterAgentResolver } from "./transporterAgent.resolver";
import { TransporterAgentService } from "./transporterAgent.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [TransporterAgentService, TransporterAgentResolver],
})
export class TransporterAgentModuleAdmin {}
