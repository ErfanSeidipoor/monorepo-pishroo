import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  GetProductByIdPublicArgs,
  GetProductsPublicArgs,
  PaginationArgs,
} from "@pishroo/dto";
import {
  FileUse,
  Product,
  ProductCategory,
  ProductColor,
  ProductProperty,
  ProductReview,
} from "@pishroo/entities";
import { CustomError, PRODUCT_NOT_FOUND } from "@pishroo/http-exceptions";
import { isUUID } from "class-validator";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(ProductProperty)
    private productPropertyRepo: Repository<ProductProperty>,
    @InjectRepository(ProductColor)
    private productColorRepo: Repository<ProductColor>,
    @InjectRepository(ProductReview)
    private productReviewRepo: Repository<ProductReview>,
    @InjectRepository(ProductCategory)
    private productCategoryRepo: Repository<ProductCategory>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async getProducts(
    paginationArgs: PaginationArgs,
    args: GetProductsPublicArgs
  ) {
    const { search, categoryIdentity } = args;

    const queryBuilder = this.productRepo.createQueryBuilder("product");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere("product.name ilike :search", {
        search: `%${search}%`,
      });
    }

    if (categoryIdentity && isUUID(categoryIdentity)) {
      queryBuilder
        .leftJoinAndSelect("product.productCategories", "productCategory")
        .andWhere("(productCategory.categoryId = :categoryIdentity)", {
          categoryIdentity,
        });
    } else if (categoryIdentity) {
      queryBuilder
        .leftJoinAndSelect("product.productCategories", "productCategory")
        .leftJoinAndSelect("productCategory.category", "category")
        .andWhere("(category.name = :categoryIdentity)", {
          categoryIdentity,
        });
    }

    queryBuilder.andWhere("product.isActive = :isActive", {
      isActive: true,
    });

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("product.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProductById(args: GetProductByIdPublicArgs): Promise<Product> {
    const { identity } = args;

    const queryBuilder = this.productRepo.createQueryBuilder("product");

    if (isUUID(identity)) {
      queryBuilder.andWhere("product.id = :identity", {
        identity,
      });
    } else {
      queryBuilder.andWhere("product.slug = :identity", {
        identity,
      });
    }

    const product = await queryBuilder.getOne();

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    return product;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async fileUses(productId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.productId = :productId", {
        productId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }

  async productCategories(productId: string): Promise<ProductCategory[]> {
    return await this.productCategoryRepo
      .createQueryBuilder("productCategory")
      .andWhere("productCategory.productId = :productId", {
        productId,
      })
      .leftJoinAndSelect("productCategory.category", "category")
      .getMany();
  }

  async productProperties(productId: string): Promise<ProductProperty[]> {
    return await this.productPropertyRepo
      .createQueryBuilder("productProperty")
      .andWhere("productProperty.productId = :productId", {
        productId,
      })
      .leftJoinAndSelect("productProperty.property", "property")
      .getMany();
  }

  async productColors(productId: string): Promise<ProductColor[]> {
    return await this.productColorRepo
      .createQueryBuilder("productColor")
      .andWhere("productColor.productId = :productId", {
        productId,
      })
      .leftJoinAndSelect("productColor.color", "color")
      .getMany();
  }

  async productReviews(productId: string): Promise<ProductReview[]> {
    return await this.productReviewRepo
      .createQueryBuilder("productReview")
      .andWhere("productReview.productId = :productId", {
        productId,
      })
      .getMany();
  }
}
