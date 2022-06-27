import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Product } from '@pishroo/entities';
import { ProductService } from './products.service';

// dto
import {
  CreateProductInput,
  DeleteProductInput,
  GetProductArgs,
  GetProductsArgs,
  UpdateProductInput,
} from '@pishroo/dto';

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

  @Mutation(() => Product)
  async createProduct(
    @Args('createProduct') createProductInput: CreateProductInput
  ): Promise<Product> {
    return this.productService.createProduct(createProductInput);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProduct') updateProductInput: UpdateProductInput
  ): Promise<Product> {
    return this.productService.updateProduct(updateProductInput);
  }

  @Mutation(() => Product)
  async deleteProduct(
    @Args('deleteProduct') deleteProductInput: DeleteProductInput
  ): Promise<Product> {
    return this.productService.deleteProduct(deleteProductInput);
  }
}
