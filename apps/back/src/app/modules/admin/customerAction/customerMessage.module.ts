import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { CustomerActionResolver } from "./customerAction.resolver";
import { CustomerActionService } from "./customerAction.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [CustomerActionService, CustomerActionResolver],
})
export class CustomerActionModuleAdmin {}
