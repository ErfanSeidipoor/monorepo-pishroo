import { registerEnumType } from "@nestjs/graphql";

export enum PropertyUnitEnum {
  weight_kilogram = "weight_kilogram",
  height_meter = "height_meter",
  unknow = "unknow",
}

registerEnumType(PropertyUnitEnum, {
  name: "PropertyUnitEnum",
});
