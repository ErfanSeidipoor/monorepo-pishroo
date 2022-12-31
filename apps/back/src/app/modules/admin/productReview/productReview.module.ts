import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ProductReviewResolver } from "./productReview.resolver";
import { ProductReviewService } from "./productReview.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProductReviewService, ProductReviewResolver],
})
export class ProductReviewModuleAdmin {}
