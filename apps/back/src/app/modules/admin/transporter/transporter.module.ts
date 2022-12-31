import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { TransporterResolver } from "./transporter.resolver";
import { TransporterService } from "./transporter.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [TransporterService, TransporterResolver],
})
export class TransporterModuleAdmin {}
