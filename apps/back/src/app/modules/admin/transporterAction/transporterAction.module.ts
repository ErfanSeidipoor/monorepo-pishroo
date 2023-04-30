import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { TransporterActionResolver } from "./transporterAction.resolver";
import { TransporterActionService } from "./transporterAction.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [TransporterActionService, TransporterActionResolver],
})
export class TransporterActionModuleAdmin {}
