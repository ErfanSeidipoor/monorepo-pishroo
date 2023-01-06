import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { MessageResolver } from "./message.resolver";
import { MessageService } from "./message.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [MessageService, MessageResolver],
})
export class MessageModuleAdmin {}
