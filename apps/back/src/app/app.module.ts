import { MiddlewareConsumer, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule, ConfigService } from "@nestjs/config";

/* --------------------------------- Modules -------------------------------- */

// admin
import { AuthModuleAdmin } from "./modules/admin/auth/auth.module";
import { ProductModuleAdmin } from "./modules/admin/product/product.module";
import { CategoryModuleAdmin } from "./modules/admin/category/category.module";
import { ColorModuleAdmin } from "./modules/admin/color/color.module";
import { PropertyModuleAdmin } from "./modules/admin/property/property.module";
import { TransporterModuleAdmin } from "./modules/admin/transporter/transporter.module";
import { TransporterAgentModuleAdmin } from "./modules/admin/transporterAgent/transporterAgent.module";
import { ProducerModuleAdmin } from "./modules/admin/producer/producer.module";
import { ProducerAgentModuleAdmin } from "./modules/admin/producerAgent/producerAgent.module";
import { ProductReviewModuleAdmin } from "./modules/admin/productReview/productReview.module";
import { ProvinceModuleAdmin } from "./modules/admin/province/province.module";
import { CityModuleAdmin } from "./modules/admin/city/city.module";
import { ProjectModuleAdmin } from "./modules/admin/project/project.module";
import { ProjectReviewModuleAdmin } from "./modules/admin/projectReview/projectReview.module";
import { CustomerModuleAdmin } from "./modules/admin/customer/customer.module";

import { FileModule } from "./modules/file/file.module";
import { entities } from "@pishroo/entities";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CurrentUserMiddleware } from "./middlewares";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      allowBatchedHttpRequests: true,
      playground: {
        settings: {
          "request.credentials": "include",
        },
      },
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
    ProductModuleAdmin,
    CategoryModuleAdmin,
    PropertyModuleAdmin,
    ColorModuleAdmin,
    ProductReviewModuleAdmin,
    ProvinceModuleAdmin,
    TransporterModuleAdmin,
    TransporterAgentModuleAdmin,
    ProducerModuleAdmin,
    ProducerAgentModuleAdmin,
    CityModuleAdmin,
    ProjectModuleAdmin,
    ProjectReviewModuleAdmin,
    CustomerModuleAdmin,
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
