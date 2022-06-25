import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Product } from '@pishroo/entities';
import { GetProductArgs, GetProductsArgs } from '@pishroo/dto';

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
}
