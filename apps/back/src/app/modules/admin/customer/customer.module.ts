import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { CustomerResolver } from "./customer.resolver";
import { CustomerService } from "./customer.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [CustomerService, CustomerResolver],
})
export class CustomerModuleAdmin {}
