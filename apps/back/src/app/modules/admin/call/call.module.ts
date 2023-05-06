import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { CallResolver } from "./call.resolver";
import { CallService } from "./call.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [CallService, CallResolver],
})
export class CallModuleAdmin {}
