import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateProductReviewAdminInputs,
  DeleteProductReviewAdminInputs,
  GetProductReviewsAdminArgs,
  GetProductReviewByIdAdminArgs,
  PaginationArgs,
  UpdateProductReviewAdminInputs,
} from "@pishroo/dto";
import { ProductReview, Product, FileUse, File } from "@pishroo/entities";
import { FileUseStatusEnum, FileUseTypeEnum } from "@pishroo/enums";
import {
  CustomError,
  FILE_NOT_FOUND,
  PRODUCT_NOT_FOUND,
  PRODUCT_REVIEW_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ProductReviewService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(ProductReview)
    private productReviewRepo: Repository<ProductReview>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createProductReview(
    inputs: CreateProductReviewAdminInputs
  ): Promise<ProductReview> {
    const { fileId, isActive, productId, reviewer, text } = inputs;

    /* ---------------------------------- file ---------------------------------- */
    const file = await this.fileRepo.findOne({
      where: {
        id: fileId,
        isUsed: false,
      },
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    file.isUsed = true;

    const fileUse = this.fileUseRepo.create({
      file,
      type: FileUseTypeEnum.product_reviewer,
      status: FileUseStatusEnum.accepted,
    });

    /* --------------------------------- product -------------------------------- */
    const product = await this.productRepo.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* ----------------------------- Product Review ----------------------------- */

    const productReview = await this.productReviewRepo.create({
      isActive,
      productId,
      reviewer,
      text,
    });

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.save(productReview);
      fileUse.productReviewId = productReview.id;
      await manager.save(fileUse);
      await manager.save(file);
    });

    /* --------------------------------- output --------------------------------- */

    return productReview;
  }

  async updateProductReview(
    inputs: UpdateProductReviewAdminInputs
  ): Promise<ProductReview> {
    const { fileId, isActive, productId, productReviewId, reviewer, text } =
      inputs;

    const productReview = await this.productReviewRepo.findOne({
      where: {
        id: productReviewId,
      },
      relations: ["fileUses", "fileUses.file", "product"],
    });

    if (!productReview) {
      throw new CustomError(PRODUCT_REVIEW_NOT_FOUND);
    }

    /* ----------------------------- file & fileUse ----------------------------- */

    let file: File;
    let fileUse: FileUse;
    let isFound = false;

    for (const fileUse_ of productReview.fileUses) {
      if (fileUse_.fileId === fileId) {
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      file = await this.fileRepo.findOne({
        where: {
          id: fileId,
          isUsed: false,
        },
      });

      if (!file) {
        throw new CustomError(FILE_NOT_FOUND);
      }

      file.isUsed = true;

      fileUse = this.fileUseRepo.create({
        file,
        type: FileUseTypeEnum.product_reviewer,
        status: FileUseStatusEnum.accepted,
      });
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(productReview, {
      isActive,
      productId,
      reviewer,
      text,
    });

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.save(productReview);

      if (fileUse) {
        await manager.softRemove(productReview.fileUses);
        fileUse.productReviewId = productReview.id;
        await manager.save(fileUse);
        await manager.save(file);
      }
    });

    /* --------------------------------- output --------------------------------- */

    if (fileUse) {
      productReview.fileUses = [fileUse];
    }

    return productReview;
  }

  async deleteProductReview(
    inputs: DeleteProductReviewAdminInputs
  ): Promise<ProductReview> {
    const { productReviewId } = inputs;

    const productReview = await this.productReviewRepo.findOne({
      where: {
        id: productReviewId,
      },
    });

    if (!productReview) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      productReview.fileUses &&
        (await manager.softRemove(productReview.fileUses));
      await manager.softRemove(productReview);
    });

    return productReview;
  }

  async getProductReviews(
    paginationArgs: PaginationArgs,
    args: GetProductReviewsAdminArgs
  ) {
    const { productId, reviewer, text } = args;

    const queryBuilder = this.productReviewRepo
      .createQueryBuilder("productReview")
      .leftJoinAndSelect("productReview.fileUses", "fileUse")
      .leftJoinAndSelect("fileUse.file", "file");

    /* --------------------------------- filters -------------------------------- */

    if (productId) {
      queryBuilder.andWhere("productReview.productId = :productId", {
        productId,
      });
    }

    if (reviewer) {
      queryBuilder.andWhere("productReview.reviewer ilike :reviewer", {
        reviewer: `%${reviewer}%`,
      });
    }

    if (text) {
      queryBuilder.andWhere("productReview.text ilike :text", {
        text: `%${text}%`,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("productReview.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProductReviewById(
    args: GetProductReviewByIdAdminArgs
  ): Promise<ProductReview> {
    const { productReviewId } = args;

    const productReview = await this.productReviewRepo
      .createQueryBuilder("productReview")
      .leftJoinAndSelect("productReview.fileUses", "fileUse")
      .leftJoinAndSelect("fileUse.file", "file")
      .andWhere("productReview.id = :productReviewId", {
        productReviewId,
      })
      .getOne();

    if (!productReview) {
      throw new CustomError(PRODUCT_REVIEW_NOT_FOUND);
    }

    return productReview;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async fileUses(productReviewId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.productReviewId = :productReviewId", {
        productReviewId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }

  async product(productReviewId: string): Promise<Product> {
    const productReview = await this.productReviewRepo
      .createQueryBuilder("productReview")
      .andWhere("productReview.id = :productReviewId", {
        productReviewId,
      })
      .leftJoinAndSelect("productReview.product", "product")
      .getOne();

    return productReview.product;
  }
}
