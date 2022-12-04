import { HttpException, HttpStatus } from "@nestjs/common";

export interface ICustomError {
  status: number;
  description: string;
}
export class CustomError extends HttpException {
  constructor({ description, status }: ICustomError) {
    super(description, status);
  }
}

export const INVALID_USERNAME_OR_PASSWORD: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Invalid Username or Password",
};

export const USER_WITH_THIS_USERNAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "User With This username already exist",
};

export const USER_WITH_THIS_PHONE_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "User with this phone already exist",
};

export const USER_WITH_THIS_EMAIL_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "User with this email already exist",
};

export const USER_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "User Not Found",
};

export const FILE_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "File Not Found",
};

export const FILE_USE_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "File Use Not Found",
};

export const PRODUCT_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Product With This name already exist",
};

export const PRODUCT_WITH_THIS_SLUG_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Product With This slug already exist",
};

export const PRODUCT_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Product Not Found",
};

export const PRODUCT_PROPERTY_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Product Property Not Found",
};

export const PROPERTY_HAS_BEEN_ADDED_BEFORE: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "This Property has been Added Before",
};

export const CATEGORY_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Category Not Found",
};

export const CATEGORY_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Category With This name already exist",
};

export const COLOR_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Color Not Found",
};

export const COLOR_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Color With This name already exist",
};

export const COLOR_WITH_THIS_VALUE_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Color With This Value already exist",
};

export const PROPERTY_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Property Not Found",
};

export const PROPERTY_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Property With This name already exist",
};
