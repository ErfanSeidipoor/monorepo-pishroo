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

export const PRODUCT_REVIEW_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Product Review Not Found",
};

export const COLOR_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Color With This name already exist",
};

export const COLOR_WITH_THIS_VALUE_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Color With This Value already exist",
};

export const PROVINCE_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Province Not Found",
};

export const CITY_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "City Not Found",
};

export const PROVINCE_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Province With This name already exist",
};

export const CITY_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "City With This name already exist",
};

export const YOU_CANT_REMOVE_THIS_PROVINCE: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "You cant Remove this Province",
};

export const PROPERTY_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Property Not Found",
};

export const PROPERTY_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Property With This name already exist",
};

export const TRANSPORTER_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Transporter Not Found",
};

export const TRANSPORTER_AGENT_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Transporter Agent Not Found",
};

export const TRANSPORTER_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Transporter With This name already exist",
};

export const TRANSPORTER_WITH_THIS_EMAIL_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Transporter With This Email already exist",
};

export const TRANSPORTER_AGENT_WITH_THIS_PHONE_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Transporter Agent With This Phone already exist",
};

export const TRANSPORTER_AGENT_WITH_THIS_EAMIL_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Transporter Agent With This Email already exist",
};

export const PRODUCER_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Producer Not Found",
};

export const PRODUCER_AGENT_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Producer Agent Not Found",
};

export const PRODUCER_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Producer With This name already exist",
};

export const PRODUCER_WITH_THIS_EMAIL_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Producer With This Email already exist",
};

export const PRODUCER_AGENT_WITH_THIS_PHONE_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Producer Agent With This Phone already exist",
};

export const PRODUCER_AGENT_WITH_THIS_EAMIL_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Producer Agent With This Email already exist",
};

export const PROJECT_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Project Not Found",
};

export const PROJECT_AGENT_NOT_FOUND: ICustomError = {
  status: HttpStatus.NOT_FOUND,
  description: "Project Agent Not Found",
};

export const PROJECT_WITH_THIS_NAME_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Project With This name already exist",
};

export const PROJECT_WITH_THIS_SLUG_ALREADY_EXIST: ICustomError = {
  status: HttpStatus.BAD_REQUEST,
  description: "Project With This Slug already exist",
};
