import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '@pishroo/entities';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [AuthService, AuthResolver],
})
export class AuthModuleAdmin {}
