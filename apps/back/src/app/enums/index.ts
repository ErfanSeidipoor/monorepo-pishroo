import { registerEnumType } from "@nestjs/graphql";

import {
  UserRoleEnum,
  PropertyUnitEnum,
  FileUseStatusEnum,
  FileUseTypeEnum,
} from "@pishroo/enums";

registerEnumType(UserRoleEnum, {
  name: "UserRoleEnum",
});

registerEnumType(FileUseTypeEnum, {
  name: "FileUseTypeEnum",
});

registerEnumType(FileUseStatusEnum, {
  name: "FileUseStatusEnum",
});

registerEnumType(PropertyUnitEnum, {
  name: "PropertyUnitEnum",
});

registerEnumType(UserRoleEnum, {
  name: "UserRoleEnum",
});

export * from "@pishroo/enums";
