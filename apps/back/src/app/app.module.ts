import { MiddlewareConsumer, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule, ConfigService } from "@nestjs/config";

/* --------------------------------- Modules -------------------------------- */

// admin
import { AuthModuleAdmin } from "./modules/admin/auth/auth.module";

import { FileModule } from "./modules/file/file.module";

import { ProductsModule } from "./products/products.module";
import { ProducersModule } from "./producers/producers.module";
import { entities } from "@pishroo/entities";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CurrentUserMiddleware } from "./middlewares";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
    }),
    TypeOrmModule.forFeature(entities),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: "postgres",
          host: config.get<string>("TYPEORM_HOST"),
          username: config.get<string>("TYPEORM_USERNAME"),
          password: config.get<string>("TYPEORM_PASSWORD"),
          database: config.get<string>("TYPEORM_DATABASE"),
          port: config.get<number>("TYPEORM_PORT"),
          synchronize: config.get<boolean>("TYPEORM_SYNCHRONIZE"),
          entities,
        };
      },
    }),
    AuthModuleAdmin,
    ProductsModule,
    ProducersModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes("*");
  }
}
