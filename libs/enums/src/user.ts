// import { registerEnumType } from "@nestjs/graphql";

export enum UserRoleEnum {
  supper_admin = "supper_admin",
  employee = "employee",
  admin_content = "admin_content",
  admin_product = "admin_product",
  admin_transporter = "admin_transporter",
  admin_producer = "admin_producer",
  admin_customer = "admin_customer",
  admin_event = "admin_event",
  admin_message = "admin_message",
}

// registerEnumType(UserRoleEnum, {
//   name: "UserRoleEnum",
// });
