import { UserRoleEnum } from "@back/enums";
import { paginate } from "@back/helpers/paginate";
import { generateHashPassword, verifyPassword } from "@back/helpers/password";
import { Ctx } from "@back/types/context.type";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateUserAdminInputs,
  GetUserByIdAdminArgs,
  GetUsersAdminArgs,
  LoginAdminInputs,
  PaginationArgs,
  UpdateUserActivationAdminInputs,
  UpdateUserAdminInputs,
  UpdateUserProvincesAdminInputs,
} from "@pishroo/dto";
import { Province, ProvinceUser, User } from "@pishroo/entities";
import {
  CustomError,
  INVALID_USERNAME_OR_PASSWORD,
  PROVINCE_NOT_FOUND,
  USER_NOT_FOUND,
  USER_WITH_THIS_EMAIL_ALREADY_EXIST,
  USER_WITH_THIS_PHONE_ALREADY_EXIST,
  USER_WITH_THIS_USERNAME_ALREADY_EXIST,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Not, Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Province) private provinceRepo: Repository<Province>,
    @InjectRepository(ProvinceUser)
    private provinceUserRepo: Repository<ProvinceUser>
  ) {}

  async login(context: Ctx, loginAdminInputs: LoginAdminInputs): Promise<User> {
    const { username, password } = loginAdminInputs;

    /* --------------------------------- finding -------------------------------- */

    const user = await this.userRepo.findOne({
      where: { username, isActive: true },
    });

    if (!user) {
      throw new CustomError(INVALID_USERNAME_OR_PASSWORD);
    }

    const isVerify = await verifyPassword(user.password, password);

    if (!isVerify) {
      throw new CustomError(INVALID_USERNAME_OR_PASSWORD);
    }

    /* -------------------------- checking admin access ------------------------- */

    if (
      !user.roles.includes(UserRoleEnum.supper_admin) &&
      !user.roles.includes(UserRoleEnum.admin_content) &&
      !user.roles.includes(UserRoleEnum.admin_product) &&
      !user.roles.includes(UserRoleEnum.admin_transporter) &&
      !user.roles.includes(UserRoleEnum.admin_producer) &&
      !user.roles.includes(UserRoleEnum.admin_event)
    ) {
      throw new CustomError(INVALID_USERNAME_OR_PASSWORD);
    }
    /* --------------------------------- session -------------------------------- */

    context.req.session.userId = user.id;
    context.req.session.createdAt = new Date();

    /* --------------------------------- output --------------------------------- */

    return user;
  }

  async logout(context: Ctx) {
    /* --------------------------------- session -------------------------------- */
    context.req.session.userId = null;
    context.req.session.createdAt = null;
  }

  async me(userId: string) {
    return await this.userRepo.findOne({
      where: { id: userId },
    });
  }

  async updateUserActivation(
    updateUserActivationAdminInputs: UpdateUserActivationAdminInputs
  ): Promise<User> {
    const { isActive, userId } = updateUserActivationAdminInputs;

    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    user.isActive = isActive;
    return await user.save();
  }

  async updateUser(
    updateUserAdminInputs: UpdateUserAdminInputs
  ): Promise<User> {
    const { userId, email, firstName, lastName, phone, roles, username } =
      updateUserAdminInputs;

    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    /* ---------------------- checking username duplication --------------------- */
    const usernameDuplication = await this.userRepo.findOne({
      where: {
        id: Not(userId),
        username,
      },
    });

    if (usernameDuplication) {
      throw new CustomError(USER_WITH_THIS_USERNAME_ALREADY_EXIST);
    }

    /* ---------------------- checking phone duplication --------------------- */
    const phoneDuplication = await this.userRepo.findOne({
      where: {
        id: Not(userId),
        phone,
      },
    });

    if (phoneDuplication) {
      throw new CustomError(USER_WITH_THIS_PHONE_ALREADY_EXIST);
    }

    /* ---------------------- checking email duplication --------------------- */
    const emailDuplication = await this.userRepo.findOne({
      where: {
        id: Not(userId),
        email: email.toLowerCase(),
      },
    });

    if (emailDuplication) {
      throw new CustomError(USER_WITH_THIS_EMAIL_ALREADY_EXIST);
    }

    utils.object.assignDefinedProps(user, {
      email: email.toLowerCase(),
      firstName,
      lastName,
      phone,
      roles,
      username,
    });

    return await user.save();
  }

  async createUser(
    CreateUserAdminInputs: CreateUserAdminInputs
  ): Promise<User> {
    const {
      username,
      password,
      email,
      firstName,
      isActive,
      lastName,
      phone,
      roles,
    } = CreateUserAdminInputs;

    /* ---------------------- checking username duplication --------------------- */
    const usernameDuplication = await this.userRepo.findOne({
      where: {
        username,
      },
    });

    if (usernameDuplication) {
      throw new CustomError(USER_WITH_THIS_USERNAME_ALREADY_EXIST);
    }

    /* ---------------------- checking phone duplication --------------------- */
    const phoneDuplication = await this.userRepo.findOne({
      where: {
        phone,
      },
    });

    if (phoneDuplication) {
      throw new CustomError(USER_WITH_THIS_PHONE_ALREADY_EXIST);
    }

    /* ---------------------- checking email duplication --------------------- */
    const emailDuplication = await this.userRepo.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (emailDuplication) {
      throw new CustomError(USER_WITH_THIS_EMAIL_ALREADY_EXIST);
    }
    /* -------------------------------- creating -------------------------------- */

    const user = this.userRepo.create({
      username,
      password: await generateHashPassword(password),
      email: email.toLowerCase(),
      firstName,
      isActive,
      lastName,
      phone,
      roles,
    });

    /* --------------------------------- output --------------------------------- */

    return await user.save();
  }

  async getUsers(
    paginationArgs: PaginationArgs,
    getUsersAdminArgs: GetUsersAdminArgs
  ) {
    const { name, roles, isActive, email, phone } = getUsersAdminArgs;

    const queryBuilder = this.userRepo.createQueryBuilder("user");

    /* -------------------------------------------------------------------------- */
    /*                                   filters                                  */
    /* -------------------------------------------------------------------------- */

    if (name) {
      queryBuilder.andWhere(
        "((user.username ilike :name) OR (user.lastName ilike :name) OR (user.firstName ilike :name))",
        {
          name: `%${name}%`,
        }
      );
    }

    if (email) {
      queryBuilder.andWhere("user.email ilike :email", {
        email: `%${email}%`,
      });
    }

    if (phone) {
      queryBuilder.andWhere("user.phone ilike :phone", {
        phone: `%${phone}%`,
      });
    }

    if (roles && roles.length) {
      queryBuilder.andWhere("user.roles <@:roles", {
        roles: [UserRoleEnum.admin_content, UserRoleEnum.supper_admin],
      });
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("user.isActive = :isActive", {
        isActive,
      });
    }
    /* -------------------------------------------------------------------------- */
    /*                                    Order                                   */
    /* -------------------------------------------------------------------------- */

    queryBuilder.addOrderBy("user.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getUserById(getUserByIdAdminArgs: GetUserByIdAdminArgs): Promise<User> {
    const { userId } = getUserByIdAdminArgs;

    const user = await this.userRepo
      .createQueryBuilder("user")
      .andWhere("user.id = :userId", {
        userId,
      })
      .getOne();

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    return user;
  }

  async UpdateUserProvinces(args: UpdateUserProvincesAdminInputs) {
    const { userId, provinceIds } = args;

    /* --------------------------------- product -------------------------------- */
    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    /* ------------------------------- categories ------------------------------- */

    const provinceUsers: ProvinceUser[] = [];

    for (const provinceId of provinceIds) {
      const province = await this.provinceRepo.findOne({
        where: { id: provinceId },
      });

      if (!province) {
        throw new CustomError(PROVINCE_NOT_FOUND);
      }

      const provinceUser = this.provinceUserRepo.create({
        province,
        user,
      });
      provinceUsers.push(provinceUser);
    }

    const currentProvinceUsers = await this.provinceUserRepo.find({
      where: { userId },
    });

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.remove(currentProvinceUsers);
      await manager.save(provinceUsers);
    });

    return user;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async provinceUsers(userId: string): Promise<ProvinceUser[]> {
    return await this.provinceUserRepo
      .createQueryBuilder("provinceUser")
      .andWhere("provinceUser.userId = :userId", {
        userId,
      })
      .leftJoinAndSelect("provinceUser.province", "province")
      .getMany();
  }
}
