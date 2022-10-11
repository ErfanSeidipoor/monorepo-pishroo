import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateProductAdminInputs,
  DeleteProductAdminInputs,
  GetProductByIdAdminArgs,
  GetProductsAdminArgs,
  PaginationArgs,
  UpdateProductActivationAdminInputs,
  UpdateProductAdminInputs,
} from "@pishroo/dto";
import { Product } from "@pishroo/entities";
import {
  CustomError,
  PRODUCT_NOT_FOUND,
  PRODUCT_WITH_THIS_NAME_ALREADY_EXIST,
  PRODUCT_WITH_THIS_SLUG_ALREADY_EXIST,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>
  ) {}

  async createProduct(inputs: CreateProductAdminInputs): Promise<Product> {
    const { isActive, name, slug, text } = inputs;

    /* ---------------------- checking name duplication --------------------- */
    const nameDuplication = await this.productRepo.findOne({
      where: {
        name,
      },
    });

    if (nameDuplication) {
      throw new CustomError(PRODUCT_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* ---------------------- checking slug duplication --------------------- */
    const slugDuplication = await this.productRepo.findOne({
      where: {
        slug,
      },
    });

    if (slugDuplication) {
      throw new CustomError(PRODUCT_WITH_THIS_SLUG_ALREADY_EXIST);
    }

    /* -------------------------------- creating -------------------------------- */

    const product = this.productRepo.create({
      isActive,
      name,
      slug,
      text,
    });

    /* --------------------------------- output --------------------------------- */

    return await product.save();
  }

  async updateProduct(inputs: UpdateProductAdminInputs): Promise<Product> {
    const { isActive, name, productId, slug, text } = inputs;

    const product = await this.productRepo.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (name !== product.name) {
      const nameDuplication = await this.productRepo.findOne({
        where: {
          name,
        },
      });

      if (nameDuplication) {
        throw new CustomError(PRODUCT_WITH_THIS_NAME_ALREADY_EXIST);
      }
    }

    /* ------------------------ checking slug duplication ----------------------- */
    if (slug !== product.slug) {
      const slugDuplication = await this.productRepo.findOne({
        where: {
          slug,
        },
      });

      if (slugDuplication) {
        throw new CustomError(PRODUCT_WITH_THIS_SLUG_ALREADY_EXIST);
      }
    }
    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(product, {
      isActive,
      name,
      slug,
      text,
    });

    /* --------------------------------- output --------------------------------- */

    return await product.save();
  }

  async deleteProduct(inputs: DeleteProductAdminInputs): Promise<Product> {
    const { productId } = inputs;

    const product = await this.productRepo.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    return await product.softRemove();
  }

  async updateProductActivation(
    inputs: UpdateProductActivationAdminInputs
  ): Promise<Product> {
    const { isActive, productId } = inputs;

    const product = await this.productRepo.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    product.isActive = isActive;
    return await product.save();
  }

  async getProducts(
    paginationArgs: PaginationArgs,
    args: GetProductsAdminArgs
  ) {
    const { name, isActive, slug } = args;

    const queryBuilder = this.productRepo.createQueryBuilder("product");

    /* --------------------------------- filters -------------------------------- */

    if (name) {
      queryBuilder.andWhere("product.name ilike :name", {
        name: `%${name}%`,
      });
    }

    if (slug) {
      queryBuilder.andWhere("product.slug ilike :slug", {
        slug: `%${slug}%`,
      });
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("product.isActive = :isActive", {
        isActive,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("product.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProductById(args: GetProductByIdAdminArgs): Promise<Product> {
    const { productId } = args;

    const product = await this.productRepo
      .createQueryBuilder("product")
      .andWhere("product.id = :productId", {
        productId,
      })
      .getOne();

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    return product;
  }
}
