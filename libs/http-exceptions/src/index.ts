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
