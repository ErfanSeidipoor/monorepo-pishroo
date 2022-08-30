import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Product } from '@pishroo/entities';
import {
  CreateProductInput,
  DeleteProductInput,
  GetProductArgs,
  GetProductsArgs,
  UpdateProductInput,
} from '@pishroo/dto';

import * as utils from '@pishroo/utils';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>
  ) {}

  async getProductById(getProductArgs: GetProductArgs) {
    const { productId } = getProductArgs;

    return this.productRepo.findOne({ where: { id: productId } });
  }

  async getProducts(getProductsArgs: GetProductsArgs) {
    const { productIds } = getProductsArgs;

    return this.productRepo.find({ where: { id: In(productIds) } });
  }

  async createProduct(
    createProductInput: CreateProductInput
  ): Promise<Product> {
    const { name, slug } = createProductInput;
    return this.productRepo.create({ slug, name, text: '' }).save();
  }

  async updateProduct(
    updateProductInput: UpdateProductInput
  ): Promise<Product> {
    const { productId, isActive, name, slug } = updateProductInput;

    const product = await this.productRepo.findOne({
      where: { id: productId },
    });

    if (product) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    utils.object.assignDefinedProps(product, {
      isActive,
      name,
      slug,
    });

    return await product.save();
  }

  async deleteProduct(
    deleteProductInput: DeleteProductInput
  ): Promise<Product> {
    const { productId } = deleteProductInput;

    const product = await this.productRepo.findOne({
      where: { id: productId },
    });

    if (product) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return await product.softRemove();
  }
}
