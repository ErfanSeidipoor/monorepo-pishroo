import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateCustomerAdminInputs,
  DeleteCustomerAdminInputs,
  GetCustomerByIdAdminArgs,
  GetCustomersAdminArgs,
  PaginationArgs,
  UpdateCustomerActivationAdminInputs,
  UpdateCustomerAdminInputs,
} from "@pishroo/dto";
import { City, Customer, File, FileUse } from "@pishroo/entities";
import {
  CITY_NOT_FOUND,
  CustomError,
  CUSTOMER_WITH_THIS_OFFICE_PHONE_ALREADY_EXIST,
  CUSTOMER_WITH_THIS_PHONE_ALREADY_EXIST,
  CUSTOMER_NOT_FOUND,
  CUSTOMER_WITH_THIS_EMAIL_ALREADY_EXIST,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CustomerService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>,
    @InjectRepository(City) private cityRepo: Repository<City>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createCustomer(inputs: CreateCustomerAdminInputs): Promise<Customer> {
    const {
      isActive,
      cityId,
      email,
      phone,
      firstName,
      jobTitle,
      lastName,
      officePhone,
    } = inputs;

    /* ---------------------- checking phone duplication --------------------- */

    const phoneDuplication = await this.customerRepo.findOne({
      where: {
        phone,
      },
    });

    if (phoneDuplication) {
      throw new CustomError(CUSTOMER_WITH_THIS_OFFICE_PHONE_ALREADY_EXIST);
    }

    /* ------------------- checking officePhone duplication ------------------ */

    const officePhoneDuplication = await this.customerRepo.findOne({
      where: {
        officePhone,
      },
    });

    if (officePhoneDuplication) {
      throw new CustomError(CUSTOMER_WITH_THIS_OFFICE_PHONE_ALREADY_EXIST);
    }

    /* --------------------- checking email duplication --------------------- */

    const emailDuplication = await this.customerRepo.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (emailDuplication) {
      throw new CustomError(CUSTOMER_WITH_THIS_EMAIL_ALREADY_EXIST);
    }

    /* ---------------------------------- city ---------------------------------- */

    const city = await this.cityRepo.findOne({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    /* -------------------------------- creating -------------------------------- */

    const customer = this.customerRepo.create({
      isActive,
      cityId,
      phone,
      firstName,
      jobTitle,
      lastName,
      officePhone,
      email: email.toLowerCase(),
    });

    /* --------------------------------- output --------------------------------- */

    return await customer.save();
  }

  async updateCustomer(inputs: UpdateCustomerAdminInputs): Promise<Customer> {
    const {
      customerId,
      isActive,
      cityId,
      email,
      phone,
      firstName,
      jobTitle,
      lastName,
      officePhone,
    } = inputs;

    const customer = await this.customerRepo.findOne({
      where: {
        id: customerId,
      },
    });

    if (!customer) {
      throw new CustomError(CUSTOMER_NOT_FOUND);
    }

    /* ------------------------ checking phone duplication ----------------------- */

    if (phone !== customer.phone) {
      const phoneDuplication = await this.customerRepo.findOne({
        where: {
          phone,
        },
      });

      if (phoneDuplication) {
        throw new CustomError(CUSTOMER_WITH_THIS_PHONE_ALREADY_EXIST);
      }
    }

    /* -------------------- checking office phone duplication -------------------- */

    if (officePhone !== customer.officePhone) {
      const officePhoneDuplication = await this.customerRepo.findOne({
        where: {
          officePhone,
        },
      });

      if (officePhoneDuplication) {
        throw new CustomError(CUSTOMER_WITH_THIS_OFFICE_PHONE_ALREADY_EXIST);
      }
    }

    /* ------------------------ checking email duplication ---------------------- */

    if (email !== customer.email) {
      const emailDuplication = await this.customerRepo.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });

      if (emailDuplication) {
        throw new CustomError(CUSTOMER_WITH_THIS_EMAIL_ALREADY_EXIST);
      }
    }

    /* ---------------------------------- city ---------------------------------- */

    const city = await this.cityRepo.find({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(customer, {
      isActive,
      cityId,
      phone,
      firstName,
      jobTitle,
      lastName,
      officePhone,
      email: email.toLowerCase(),
    });

    /* --------------------------------- output --------------------------------- */

    return await customer.save();
  }

  async deleteCustomer(inputs: DeleteCustomerAdminInputs): Promise<Customer> {
    const { customerId } = inputs;

    const customer = await this.customerRepo.findOne({
      where: {
        id: customerId,
      },
    });

    if (!customer) {
      throw new CustomError(CUSTOMER_NOT_FOUND);
    }
    // todo > adding some login before removing

    /* --------------------------------- saving --------------------------------- */
    await this.customerRepo.softRemove(customer);
    return customer;
  }

  async updateCustomerActivation(
    inputs: UpdateCustomerActivationAdminInputs
  ): Promise<Customer> {
    const { isActive, customerId } = inputs;

    const customer = await this.customerRepo.findOne({
      where: {
        id: customerId,
      },
    });

    if (!customer) {
      throw new CustomError(CUSTOMER_NOT_FOUND);
    }

    customer.isActive = isActive;

    return await customer.save();
  }

  async getCustomers(
    paginationArgs: PaginationArgs,
    args: GetCustomersAdminArgs
  ) {
    const { isActive, search, cityIds, provinceIds } = args;

    const queryBuilder = this.customerRepo
      .createQueryBuilder("customer")
      .leftJoinAndSelect("customer.city", "city");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(
        `(
          (LOWER(customer.firstName) ilike LOWER(:search)) OR
          (LOWER(customer.lastName) ilike LOWER(:search)) OR
          (LOWER(customer.email) ilike LOWER(:search)) OR
          (LOWER(customer.jobTitle) ilike LOWER(:search)) OR
          (LOWER(customer.phone) ilike LOWER(:search)) OR
          (LOWER(customer.officePhone) ilike LOWER(:search))
        )`,
        {
          search: `%${search}%`,
        }
      );
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("customer.isActive = :isActive", {
        isActive,
      });
    }

    if (cityIds && cityIds.length) {
      queryBuilder.andWhere("customer.cityId IN (:...cityIds)", { cityIds });
    }

    if (provinceIds && provinceIds.length) {
      queryBuilder.andWhere("city.provinceId IN (:...provinceIds)", {
        provinceIds,
      });
    }
    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("customer.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getCustomerById(args: GetCustomerByIdAdminArgs): Promise<Customer> {
    const { customerId } = args;

    const customer = await this.customerRepo
      .createQueryBuilder("customer")
      .andWhere("customer.id = :customerId", {
        customerId,
      })
      .getOne();

    if (!customer) {
      throw new CustomError(CUSTOMER_NOT_FOUND);
    }

    return customer;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async city(customerId: string): Promise<City> {
    const customer = await this.customerRepo
      .createQueryBuilder("customer")
      .andWhere("customer.id = :customerId", {
        customerId,
      })
      .leftJoinAndSelect("customer.city", "city")
      .leftJoinAndSelect("city.province", "province")
      .getOne();

    return customer.city;
  }
}
