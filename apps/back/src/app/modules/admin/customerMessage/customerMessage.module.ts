import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { CustomerMessageResolver } from "./customerMessage.resolver";
import { CustomerMessageService } from "./customerMessage.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [CustomerMessageService, CustomerMessageResolver],
})
export class CustomerMessageModuleAdmin {}
