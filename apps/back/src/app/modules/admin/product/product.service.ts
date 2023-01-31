import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  AddCategoriesToProductAdminInputs,
  AddColorsToProductAdminInputs,
  AddImageToProductAdminInputs,
  CreateProductAdminInputs,
  DeleteProductAdminInputs,
  GetProductByIdAdminArgs,
  GetProductsAdminArgs,
  PaginationArgs,
  RemoveImageFromProductAdminInputs,
  UpdateProductActivationAdminInputs,
  UpdateProductAdminInputs,
} from "@pishroo/dto";
import {
  Product,
  Property,
  File,
  FileUse,
  ProductCategory,
  Category,
  ProductProperty,
  ProductColor,
  Color,
  ProductReview,
} from "@pishroo/entities";
import { FileUseStatusEnum, FileUseTypeEnum } from "@back/enums";
import {
  COLOR_NOT_FOUND,
  CustomError,
  FILE_NOT_FOUND,
  FILE_USE_NOT_FOUND,
  PRODUCT_NOT_FOUND,
  PRODUCT_PROPERTY_NOT_FOUND,
  PRODUCT_WITH_THIS_NAME_ALREADY_EXIST,
  PRODUCT_WITH_THIS_SLUG_ALREADY_EXIST,
  PROPERTY_HAS_BEEN_ADDED_BEFORE,
  PROPERTY_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { Repository, DataSource } from "typeorm";
import {
  AddPropertyToProductAdminInputsGQL,
  RemovePropertyFromProductAdminInputsGQL,
  UpdatePropertyOfProductAdminInputsGQL,
} from "./dto";

@Injectable()
export class ProductService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
    @InjectRepository(ProductProperty)
    private productPropertyRepo: Repository<ProductProperty>,
    @InjectRepository(ProductColor)
    private productColorRepo: Repository<ProductColor>,
    @InjectRepository(ProductReview)
    private productReviewRepo: Repository<ProductReview>,
    @InjectRepository(ProductCategory)
    private productCategoryRepo: Repository<ProductCategory>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
    @InjectRepository(Color)
    private colorRepo: Repository<Color>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
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

  /* -------------------------------------------------------------------------- */
  /*                                  Category                                  */
  /* -------------------------------------------------------------------------- */

  async addCategoriesToProduct(args: AddCategoriesToProductAdminInputs) {
    const { categories: names, productId } = args;

    /* --------------------------------- product -------------------------------- */
    const product = await this.productRepo.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* ------------------------------- categories ------------------------------- */

    const productCategories: ProductCategory[] = [];

    for (const name of names) {
      let category = await this.categoryRepo.findOne({ where: { name } });
      if (!category) {
        category = await this.categoryRepo.create({ name });
      }
      const productCategory = this.productCategoryRepo.create({
        category,
        product,
      });
      productCategories.push(productCategory);
    }

    const currentProductCategories = await this.productCategoryRepo.find({
      where: { productId },
    });

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.remove(currentProductCategories);

      for (const productCategory of productCategories) {
        const { category } = productCategory;
        await manager.save(category);
        productCategory.category = category;
        await manager.save(productCategory);
      }
    });

    return product;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Color                                   */
  /* -------------------------------------------------------------------------- */

  async addColorsToProduct(args: AddColorsToProductAdminInputs) {
    const { colorIds, productId } = args;

    /* --------------------------------- product -------------------------------- */
    const product = await this.productRepo.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* ------------------------------- categories ------------------------------- */

    const productColors: ProductColor[] = [];

    for (const colorId of colorIds) {
      let color = await this.colorRepo.findOne({
        where: { id: colorId },
      });

      if (!color) {
        throw new CustomError(COLOR_NOT_FOUND);
      }

      const productColor = this.productColorRepo.create({
        color,
        product,
      });
      productColors.push(productColor);
    }

    const currentProductColors = await this.productColorRepo.find({
      where: { productId },
    });

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.remove(currentProductColors);

      for (const productColor of productColors) {
        await manager.save(productColor);
      }
    });

    return product;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Property                                  */
  /* -------------------------------------------------------------------------- */

  async addPropertyToProduct(
    args: AddPropertyToProductAdminInputsGQL
  ): Promise<Product> {
    const { propertyId, value, productId } = args;

    /* -------------------------------- property -------------------------------- */

    const property = await this.propertyRepo.findOne({
      where: {
        id: propertyId,
      },
    });

    if (!property) {
      throw new CustomError(PROPERTY_NOT_FOUND);
    }

    /* --------------------------------- Product -------------------------------- */

    const product = await this.productRepo.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* ----------------------------- productProperty ---------------------------- */

    let productProperty = await this.productPropertyRepo.findOne({
      where: {
        productId,
        propertyId,
      },
    });

    if (productProperty) {
      throw new CustomError(PROPERTY_HAS_BEEN_ADDED_BEFORE);
    }

    productProperty = await this.productPropertyRepo.create({
      productId,
      propertyId,
      value,
    });

    /* ---------------------------------- save ---------------------------------- */
    await productProperty.save();

    return product;
  }

  async updatePropertyOfProduct(
    args: UpdatePropertyOfProductAdminInputsGQL
  ): Promise<Product> {
    const { productPropertyId, value } = args;

    /* ----------------------------- productProperty ---------------------------- */

    const productProperty = await this.productPropertyRepo.findOne({
      where: {
        id: productPropertyId,
      },
      relations: ["product"],
    });

    if (!productProperty) {
      throw new CustomError(PRODUCT_PROPERTY_NOT_FOUND);
    }

    /* --------------------------------- update --------------------------------- */

    utils.object.assignDefinedProps(productProperty, { value });

    /* ---------------------------------- save ---------------------------------- */

    await productProperty.save();

    return productProperty.product;
  }

  async removePropertyFromProduct(
    args: RemovePropertyFromProductAdminInputsGQL
  ) {
    const { productPropertyId } = args;

    /* ----------------------------- productProperty ---------------------------- */

    const productProperty = await this.productPropertyRepo.findOne({
      where: {
        id: productPropertyId,
      },
      relations: ["product"],
    });

    if (!productProperty) {
      throw new CustomError(PRODUCT_PROPERTY_NOT_FOUND);
    }

    /* ---------------------------------- remove ---------------------------------- */

    await productProperty.softRemove();

    return productProperty.product;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  async removeImageFromProduct(args: RemoveImageFromProductAdminInputs) {
    const { fileUseId } = args;

    /* ---------------------------------- file ---------------------------------- */

    const fileUse = await this.fileUseRepo.findOne({
      where: {
        id: fileUseId,
        type: FileUseTypeEnum.product,
      },
      relations: ["file", "product"],
    });

    if (!fileUse) {
      throw new CustomError(FILE_USE_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.softRemove(fileUse.file);
      await manager.softRemove(fileUse);
    });

    return fileUse.product;
  }

  async addImageToProduct(
    args: AddImageToProductAdminInputs
  ): Promise<Product> {
    const { fileId, productId } = args;

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
    /* --------------------------------- product -------------------------------- */
    const product = await this.productRepo.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    const fileUse = this.fileUseRepo.create({
      file,
      product,
      type: FileUseTypeEnum.product,
      status: FileUseStatusEnum.accepted,
    });

    await this.dataSource.transaction(async (manager) => {
      await manager.save(file);
      await manager.save(fileUse);
    });

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
