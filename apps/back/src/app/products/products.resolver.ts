import { Query, Resolver, Args } from '@nestjs/graphql';
import { Product } from '@pishroo/entities';
import { ProductService } from './products.service';

// dto
import { GetProductArgs, GetProductsArgs } from '@pishroo/dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => Product, { name: 'product', nullable: true })
  async getProductById(
    @Args() getProductArgs: GetProductArgs
  ): Promise<Product> {
    return await this.productService.getProductById(getProductArgs);
  }

  @Query(() => [Product], { name: 'products', nullable: 'items' })
  async getProducts(
    @Args() getProductsArgs: GetProductsArgs
  ): Promise<Product[]> {
    return await this.productService.getProducts(getProductsArgs);
  }
}
