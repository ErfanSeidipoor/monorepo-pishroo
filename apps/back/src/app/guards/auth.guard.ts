import { CanActivate, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { UserRoleEnum } from "@back/enums";
import { Request } from "express";

export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;
    return !!request.user;
  }
}

export class SuperAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    return (
      request.user &&
      request.user.roles.includes(UserRoleEnum.supper_admin) &&
      true
    );
  }
}

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    return (
      request.user &&
      (request.user.roles.includes(UserRoleEnum.supper_admin) ||
        request.user.roles.includes(UserRoleEnum.admin_content) ||
        request.user.roles.includes(UserRoleEnum.admin_product) ||
        request.user.roles.includes(UserRoleEnum.admin_transporter) ||
        request.user.roles.includes(UserRoleEnum.admin_producer) ||
        request.user.roles.includes(UserRoleEnum.admin_event)) &&
      true
    );
  }
}

export class ProductAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    return (
      request.user &&
      request.user.roles.includes(UserRoleEnum.admin_product) &&
      true
    );
  }
}

export class TransporterAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    return (
      request.user &&
      request.user.roles.includes(UserRoleEnum.admin_transporter) &&
      true
    );
  }
}

export class ProducerAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    return (
      request.user &&
      request.user.roles.includes(UserRoleEnum.admin_producer) &&
      true
    );
  }
}

export class ContentAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    return (
      request.user &&
      request.user.roles.includes(UserRoleEnum.admin_content) &&
      true
    );
  }
}

export class CustomerAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    return (
      request.user &&
      request.user.roles.includes(UserRoleEnum.admin_customer) &&
      true
    );
  }
}
export class MessageAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    return (
      request.user &&
      // request.user.roles.includes(UserRoleEnum.admin_message) &&
      true
    );
  }
}

// export enum UserRoleEnum {
//   supper_admin = "supper_admin",
//   employee = "employee",
//   admin_content = "admin_content",
//   admin_product = "admin_product",
//   admin_transporter = "admin_transporter",
//   admin_producer = "admin_producer",
//   admin_event = "admin_event",
//   admin_message = "admin_message",
// }
