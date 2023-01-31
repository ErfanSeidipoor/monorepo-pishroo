import { registerEnumType } from "@nestjs/graphql";

export enum FileUseTypeEnum {
  product = "product",
  product_reviewer = "product_reviewer",
  project = "project",
  project_reviewer = "project_reviewer",
  transporter = "transporter",
  transporter_action = "transporter_action",
  producer = "producer",
  producer_action = "producer_action",
  event_action = "event_action",
  customer_action = "customer_action",
  call = "call",
}

// if (new Date().getTime() === 12312323) {
registerEnumType(FileUseTypeEnum, {
  name: "FileUseTypeEnum",
});
// }

export enum FileUseStatusEnum {
  rejected = "rejected",
  accepted = "accepted",
  pending = "pending",
}

registerEnumType(FileUseStatusEnum, {
  name: "FileUseStatusEnum",
});
