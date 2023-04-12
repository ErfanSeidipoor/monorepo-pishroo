/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddCategoriesToProductAdminInputsGql = {
  categoryIds: Array<Scalars['String']>;
  productId: Scalars['String'];
};

export type AddColorsToProductAdminInputsGql = {
  colorIds: Array<Scalars['String']>;
  productId: Scalars['String'];
};

export type AddImageToProducerAdminInputsGql = {
  fileId: Scalars['String'];
  producerId: Scalars['String'];
};

export type AddImageToProductAdminInputsGql = {
  fileId: Scalars['String'];
  productId: Scalars['String'];
};

export type AddImageToProjectAdminInputsGql = {
  fileId: Scalars['String'];
  projectId: Scalars['String'];
};

export type AddImageToTransporterAdminInputsGql = {
  fileId: Scalars['String'];
  transporterId: Scalars['String'];
};

export type AddImageToUserAdminInputsGql = {
  fileId: Scalars['String'];
  userId: Scalars['String'];
};

export type AddPropertyToProductAdminInputsGql = {
  productId: Scalars['String'];
  propertyId: Scalars['String'];
  value: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type City = {
  __typename?: 'City';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  province: Province;
  provinceId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Color = {
  __typename?: 'Color';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type CreateCategoryAdminInputsGql = {
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type CreateCityAdminInputsGql = {
  name: Scalars['String'];
  provinceId: Scalars['String'];
};

export type CreateColorAdminInputsGql = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type CreateCustomerAdminInputsGql = {
  cityId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  officePhone?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerMessageAdminInputsGql = {
  customerId: Scalars['String'];
  messageId: Scalars['String'];
};

export type CreateMessageAdminInputsGql = {
  customerIds: Array<Scalars['String']>;
  isActive: Scalars['Boolean'];
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateProducerAdminInputsGql = {
  address: Scalars['String'];
  cityId?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateProducerAgentAdminInputsGql = {
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  producerId: Scalars['String'];
};

export type CreateProductAdminInputsGql = {
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  slug: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};

export type CreateProductReviewAdminInputsGql = {
  fileId: Scalars['String'];
  isActive: Scalars['Boolean'];
  productId: Scalars['String'];
  reviewer: Scalars['String'];
  text: Scalars['String'];
};

export type CreateProjectAdminInputsGql = {
  cityId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  lat?: InputMaybe<Scalars['Float']>;
  long?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CreateProjectReviewAdminInputsGql = {
  fileId: Scalars['String'];
  isActive: Scalars['Boolean'];
  projectId: Scalars['String'];
  reviewer: Scalars['String'];
  text: Scalars['String'];
};

export type CreatePropertyAdminInputsGql = {
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  unit: PropertyUnitEnum;
};

export type CreateProvinceAdminInputsGql = {
  name: Scalars['String'];
};

export type CreateTransporterAdminInputsGql = {
  address: Scalars['String'];
  cityId?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateTransporterAgentAdminInputsGql = {
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  transporterId: Scalars['String'];
};

export type CreateUserAdminInputsGql = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  roles: Array<UserRoleEnum>;
  username: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  city: City;
  cityId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  officePhone?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerMessage = {
  __typename?: 'CustomerMessage';
  createdAt: Scalars['DateTime'];
  customer: Customer;
  customerId: Scalars['String'];
  customerMessages: Message;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  message: Message;
  messageId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeleteCategoryAdminInputsGql = {
  categoryId: Scalars['String'];
};

export type DeleteCityAdminInputsGql = {
  cityId: Scalars['String'];
};

export type DeleteColorAdminInputsGql = {
  colorId: Scalars['String'];
};

export type DeleteCustomerAdminInputsGql = {
  customerId: Scalars['String'];
};

export type DeleteCustomerMessageAdminInputsGql = {
  customerMessageId: Scalars['String'];
};

export type DeleteMessageAdminInputsGql = {
  messageId: Scalars['String'];
};

export type DeleteProducerAdminInputsGql = {
  producerId: Scalars['String'];
};

export type DeleteProducerAgentAdminInputsGql = {
  producerAgentId: Scalars['String'];
};

export type DeleteProductAdminInputsGql = {
  productId: Scalars['String'];
};

export type DeleteProductReviewAdminInputsGql = {
  productReviewId: Scalars['String'];
};

export type DeleteProjectAdminInputsGql = {
  projectId: Scalars['String'];
};

export type DeleteProjectReviewAdminInputsGql = {
  projectReviewId: Scalars['String'];
};

export type DeletePropertyAdminInputsGql = {
  propertyId: Scalars['String'];
};

export type DeleteProvinceAdminInputsGql = {
  provinceId: Scalars['String'];
};

export type DeleteTransporterAdminInputsGql = {
  transporterId: Scalars['String'];
};

export type DeleteTransporterAgentAdminInputsGql = {
  transporterAgentId: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  destination: Scalars['String'];
  encoding: Scalars['String'];
  filename: Scalars['String'];
  id: Scalars['String'];
  isUsed: Scalars['Boolean'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileUse = {
  __typename?: 'FileUse';
  callId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customerActionId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventActionId?: Maybe<Scalars['String']>;
  file: File;
  fileId: Scalars['String'];
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  producerActionId?: Maybe<Scalars['String']>;
  producerId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  productReviewId?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  projectReviewId?: Maybe<Scalars['String']>;
  status: FileUseStatusEnum;
  transporterActionId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  type: FileUseTypeEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export enum FileUseStatusEnum {
  Accepted = 'accepted',
  Pending = 'pending',
  Rejected = 'rejected'
}

export enum FileUseTypeEnum {
  Call = 'call',
  CustomerAction = 'customer_action',
  EventAction = 'event_action',
  Producer = 'producer',
  ProducerAction = 'producer_action',
  Product = 'product',
  ProductReviewer = 'product_reviewer',
  Project = 'project',
  ProjectReviewer = 'project_reviewer',
  Transporter = 'transporter',
  TransporterAction = 'transporter_action',
  User = 'user'
}

export type GetCategoriesAdminArgsGql = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GetCategoriesPublicArgsGql = {
  search?: InputMaybe<Scalars['String']>;
};

export type GetCitiesAdminArgsGql = {
  cityId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  provinceId?: InputMaybe<Scalars['String']>;
};

export type GetColorsAdminArgsGql = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type GetCustomersAdminArgsGql = {
  cityIds?: InputMaybe<Array<Scalars['String']>>;
  customerIds?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  provinceIds?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetMessagesAdminArgsGql = {
  customerId?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isSubmitted?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type GetProducerAgentsAdminArgsGql = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  producerId?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetProducersAdminArgsGql = {
  cityIds?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  producerId?: InputMaybe<Scalars['String']>;
  provinceIds?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetProductPropertiesAdminArgsGql = {
  name?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
};

export type GetProductReviewsAdminArgsGql = {
  productId?: InputMaybe<Scalars['String']>;
  reviewer?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type GetProductsAdminArgsGql = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type GetProductsPublicArgsGql = {
  categoryIdentity?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetProjectReviewsAdminArgsGql = {
  projectId?: InputMaybe<Scalars['String']>;
  reviewer?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type GetProjectsAdminArgsGql = {
  cityIds?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  provinceIds?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetProjectsPublicArgsGql = {
  search?: InputMaybe<Scalars['String']>;
};

export type GetPropertiesAdminArgsGql = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Array<PropertyUnitEnum>>;
};

export type GetProvincesAdminArgsGql = {
  name?: InputMaybe<Scalars['String']>;
  provinceId?: InputMaybe<Scalars['String']>;
};

export type GetTransporterAgentsAdminArgsGql = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  transporterId?: InputMaybe<Scalars['String']>;
};

export type GetTransportersAdminArgsGql = {
  cityIds?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  provinceIds?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  transporterId?: InputMaybe<Scalars['String']>;
};

export type GetUsersAdminArgsGql = {
  email?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<UserRoleEnum>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type GetUsersPublicArgsGql = {
  search?: InputMaybe<Scalars['String']>;
};

export type LoginAdminInputsGql = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  count: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  customerMessages: Array<CustomerMessage>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isSubmited?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategoriesToProductAdmin: Product;
  addColorsToProductAdmin: Product;
  addImageToProducerAdmin: Producer;
  addImageToProductAdmin: Product;
  addImageToProjectAdmin: Project;
  addImageToTransporterAdmin: Transporter;
  addImageToUserAdmin: User;
  addPropertyToProductAdmin: ProductProperty;
  createCategoryAdmin: Category;
  createCityAdmin: City;
  createColorAdmin: Color;
  createCustomerAdmin: Customer;
  createCustomerMessageAdmin: CustomerMessage;
  createMessageAdmin: Message;
  createProducerAdmin: Producer;
  createProducerAgentAdmin: ProducerAgent;
  createProductAdmin: Product;
  createProductReviewAdmin: ProductReview;
  createProjectAdmin: Project;
  createProjectReviewAdmin: ProjectReview;
  createPropertyAdmin: Property;
  createProvinceAdmin: Province;
  createTransporterAdmin: Transporter;
  createTransporterAgentAdmin: TransporterAgent;
  createUserAdmin: User;
  deleteCategoryAdmin: Category;
  deleteCityAdmin: City;
  deleteColorAdmin: Color;
  deleteCustomerAdmin: Customer;
  deleteCustomerMessageAdmin: CustomerMessage;
  deleteMessageAdmin: Message;
  deleteProducerAdmin: Producer;
  deleteProducerAgentAdmin: ProducerAgent;
  deleteProductAdmin: Product;
  deleteProductReviewAdmin: ProductReview;
  deleteProjectAdmin: Project;
  deleteProjectReviewAdmin: ProjectReview;
  deletePropertyAdmin: Property;
  deleteProvinceAdmin: Province;
  deleteTransporterAdmin: Transporter;
  deleteTransporterAgentAdmin: TransporterAgent;
  removeImageAdmin: File;
  removeImageFromProducerAdmin: Producer;
  removeImageFromProductAdmin: Product;
  removeImageFromProjectAdmin: Project;
  removeImageFromTransporterAdmin: Transporter;
  removeImageFromUserAdmin: User;
  removePropertyFromProductAdmin: Product;
  updateCategoryActivationAdmin: Category;
  updateCategoryAdmin: Category;
  updateCityAdmin: City;
  updateColorAdmin: Color;
  updateCustomerActivationAdmin: Customer;
  updateCustomerAdmin: Customer;
  updateMessageActivationAdmin: Message;
  updateMessageAdmin: Message;
  updateProducerActivationAdmin: Producer;
  updateProducerAdmin: Producer;
  updateProducerAgentActivationAdmin: ProducerAgent;
  updateProducerAgentAdmin: ProducerAgent;
  updateProductActivationAdmin: Product;
  updateProductAdmin: Product;
  updateProductReviewAdmin: ProductReview;
  updateProjectActivationAdmin: Project;
  updateProjectAdmin: Project;
  updateProjectReviewAdmin: ProjectReview;
  updatePropertyActivationAdmin: Property;
  updatePropertyAdmin: Property;
  updatePropertyOfProductAdmin: ProductProperty;
  updateProvinceAdmin: Province;
  updateTransporterActivationAdmin: Transporter;
  updateTransporterAdmin: Transporter;
  updateTransporterAgentActivationAdmin: TransporterAgent;
  updateTransporterAgentAdmin: TransporterAgent;
  updateUserActivationAdmin: User;
  updateUserAdmin: User;
  updateUserProvincesAdmin: User;
  uploadFile: File;
};


export type MutationAddCategoriesToProductAdminArgs = {
  addCategoriesToProductAdminInputs: AddCategoriesToProductAdminInputsGql;
};


export type MutationAddColorsToProductAdminArgs = {
  addColorsToProductAdminInputs: AddColorsToProductAdminInputsGql;
};


export type MutationAddImageToProducerAdminArgs = {
  addImageToProducerAdmin: AddImageToProducerAdminInputsGql;
};


export type MutationAddImageToProductAdminArgs = {
  addImageToProductAdmin: AddImageToProductAdminInputsGql;
};


export type MutationAddImageToProjectAdminArgs = {
  addImageToProjectAdminInputs: AddImageToProjectAdminInputsGql;
};


export type MutationAddImageToTransporterAdminArgs = {
  addImageToTransporterAdmin: AddImageToTransporterAdminInputsGql;
};


export type MutationAddImageToUserAdminArgs = {
  addImageToUserAdminInputs: AddImageToUserAdminInputsGql;
};


export type MutationAddPropertyToProductAdminArgs = {
  addPropertyToProductAdminInputs: AddPropertyToProductAdminInputsGql;
};


export type MutationCreateCategoryAdminArgs = {
  createCategoryAdminInputs: CreateCategoryAdminInputsGql;
};


export type MutationCreateCityAdminArgs = {
  createCityAdminInputs: CreateCityAdminInputsGql;
};


export type MutationCreateColorAdminArgs = {
  createColorAdminInputs: CreateColorAdminInputsGql;
};


export type MutationCreateCustomerAdminArgs = {
  createCustomerAdminInputs: CreateCustomerAdminInputsGql;
};


export type MutationCreateCustomerMessageAdminArgs = {
  createCustomerMessageAdmin: CreateCustomerMessageAdminInputsGql;
};


export type MutationCreateMessageAdminArgs = {
  createMessageAdminInputs: CreateMessageAdminInputsGql;
};


export type MutationCreateProducerAdminArgs = {
  createProducerAdminInputs: CreateProducerAdminInputsGql;
};


export type MutationCreateProducerAgentAdminArgs = {
  createProducerAgentAdminInputs: CreateProducerAgentAdminInputsGql;
};


export type MutationCreateProductAdminArgs = {
  createProductAdminInputs: CreateProductAdminInputsGql;
};


export type MutationCreateProductReviewAdminArgs = {
  createProductReviewAdminInputs: CreateProductReviewAdminInputsGql;
};


export type MutationCreateProjectAdminArgs = {
  createProjectAdminInputs: CreateProjectAdminInputsGql;
};


export type MutationCreateProjectReviewAdminArgs = {
  createProjectReviewAdminInputs: CreateProjectReviewAdminInputsGql;
};


export type MutationCreatePropertyAdminArgs = {
  createPropertyAdminInputs: CreatePropertyAdminInputsGql;
};


export type MutationCreateProvinceAdminArgs = {
  createProvinceAdminInputs: CreateProvinceAdminInputsGql;
};


export type MutationCreateTransporterAdminArgs = {
  createTransporterAdminInputs: CreateTransporterAdminInputsGql;
};


export type MutationCreateTransporterAgentAdminArgs = {
  createTransporterAgentAdminInputs: CreateTransporterAgentAdminInputsGql;
};


export type MutationCreateUserAdminArgs = {
  createUserAdminInputs: CreateUserAdminInputsGql;
};


export type MutationDeleteCategoryAdminArgs = {
  deleteCategoryAdminInputs: DeleteCategoryAdminInputsGql;
};


export type MutationDeleteCityAdminArgs = {
  deleteCityAdmin: DeleteCityAdminInputsGql;
};


export type MutationDeleteColorAdminArgs = {
  deleteColorAdmin: DeleteColorAdminInputsGql;
};


export type MutationDeleteCustomerAdminArgs = {
  deleteCustomerAdmin: DeleteCustomerAdminInputsGql;
};


export type MutationDeleteCustomerMessageAdminArgs = {
  deleteCustomerMessageAdmin: DeleteCustomerMessageAdminInputsGql;
};


export type MutationDeleteMessageAdminArgs = {
  deleteMessageAdminInputs: DeleteMessageAdminInputsGql;
};


export type MutationDeleteProducerAdminArgs = {
  deleteProducerAdmin: DeleteProducerAdminInputsGql;
};


export type MutationDeleteProducerAgentAdminArgs = {
  deleteProducerAgentAdmin: DeleteProducerAgentAdminInputsGql;
};


export type MutationDeleteProductAdminArgs = {
  deleteProductAdmin: DeleteProductAdminInputsGql;
};


export type MutationDeleteProductReviewAdminArgs = {
  deleteProductReviewAdminInputs: DeleteProductReviewAdminInputsGql;
};


export type MutationDeleteProjectAdminArgs = {
  deleteProjectAdmin: DeleteProjectAdminInputsGql;
};


export type MutationDeleteProjectReviewAdminArgs = {
  deleteProjectReviewAdminInputs: DeleteProjectReviewAdminInputsGql;
};


export type MutationDeletePropertyAdminArgs = {
  deletePropertyAdminInputs: DeletePropertyAdminInputsGql;
};


export type MutationDeleteProvinceAdminArgs = {
  deleteProvinceAdmin: DeleteProvinceAdminInputsGql;
};


export type MutationDeleteTransporterAdminArgs = {
  deleteTransporterAdmin: DeleteTransporterAdminInputsGql;
};


export type MutationDeleteTransporterAgentAdminArgs = {
  deleteTransporterAgentAdmin: DeleteTransporterAgentAdminInputsGql;
};


export type MutationRemoveImageAdminArgs = {
  removeImageAdmin: RemoveImageAdminInputsGql;
};


export type MutationRemoveImageFromProducerAdminArgs = {
  removeImageFromProducerAdmin: RemoveImageFromProducerAdminInputsGql;
};


export type MutationRemoveImageFromProductAdminArgs = {
  removeImageFromProductAdmin: RemoveImageFromProductAdminInputsGql;
};


export type MutationRemoveImageFromProjectAdminArgs = {
  removeImageFromProjectAdmin: RemoveImageFromProjectAdminInputsGql;
};


export type MutationRemoveImageFromTransporterAdminArgs = {
  removeImageFromTransporterAdmin: RemoveImageFromTransporterAdminInputsGql;
};


export type MutationRemoveImageFromUserAdminArgs = {
  removeImageFromUserAdminInputs: RemoveImageFromUserAdminInputsGql;
};


export type MutationRemovePropertyFromProductAdminArgs = {
  removePropertyFromProductAdminInputs: RemovePropertyFromProductAdminInputsGql;
};


export type MutationUpdateCategoryActivationAdminArgs = {
  updateCategoryActivationAdminInputs: UpdateCategoryActivationAdminInputsGql;
};


export type MutationUpdateCategoryAdminArgs = {
  updateCategoryAdminInputs: UpdateCategoryAdminInputsGql;
};


export type MutationUpdateCityAdminArgs = {
  updateCityAdminInputs: UpdateCityAdminInputsGql;
};


export type MutationUpdateColorAdminArgs = {
  updateColorAdmin: UpdateColorAdminInputsGql;
};


export type MutationUpdateCustomerActivationAdminArgs = {
  updateCustomerActivationAdmin: UpdateCustomerActivationAdminInputsGql;
};


export type MutationUpdateCustomerAdminArgs = {
  updateCustomerAdminInputs: UpdateCustomerAdminInputsGql;
};


export type MutationUpdateMessageActivationAdminArgs = {
  updateMessageActivationAdminInputs: UpdateMessageActivationAdminInputsGql;
};


export type MutationUpdateMessageAdminArgs = {
  updateMessageAdminInputs: UpdateMessageAdminInputsGql;
};


export type MutationUpdateProducerActivationAdminArgs = {
  updateProducerActivationAdminInputs: UpdateProducerActivationAdminInputsGql;
};


export type MutationUpdateProducerAdminArgs = {
  updateProducerAdminInputs: UpdateProducerAdminInputsGql;
};


export type MutationUpdateProducerAgentActivationAdminArgs = {
  updateProducerAgentActivationAdminInputs: UpdateProducerAgentActivationAdminInputsGql;
};


export type MutationUpdateProducerAgentAdminArgs = {
  updateProducerAgentAdminInputs: UpdateProducerAgentAdminInputsGql;
};


export type MutationUpdateProductActivationAdminArgs = {
  updateProductActivationAdmin: UpdateProductActivationAdminInputsGql;
};


export type MutationUpdateProductAdminArgs = {
  updateProductAdminInputs: UpdateProductAdminInputsGql;
};


export type MutationUpdateProductReviewAdminArgs = {
  updateProductReviewAdminInputs: UpdateProductReviewAdminInputsGql;
};


export type MutationUpdateProjectActivationAdminArgs = {
  updateProjectActivationAdminInputs: UpdateProjectActivationAdminInputsGql;
};


export type MutationUpdateProjectAdminArgs = {
  updateProjectAdminInputs: UpdateProjectAdminInputsGql;
};


export type MutationUpdateProjectReviewAdminArgs = {
  updateProjectReviewAdminInputs: UpdateProjectReviewAdminInputsGql;
};


export type MutationUpdatePropertyActivationAdminArgs = {
  updatePropertyActivationAdminInputs: UpdatePropertyActivationAdminInputsGql;
};


export type MutationUpdatePropertyAdminArgs = {
  updatePropertyAdminInputs: UpdatePropertyAdminInputsGql;
};


export type MutationUpdatePropertyOfProductAdminArgs = {
  updatePropertyOfProductAdminInputs: UpdatePropertyOfProductAdminInputsGql;
};


export type MutationUpdateProvinceAdminArgs = {
  updateProvinceAdminInputs: UpdateProvinceAdminInputsGql;
};


export type MutationUpdateTransporterActivationAdminArgs = {
  updateTransporterActivationAdminInputs: UpdateTransporterActivationAdminInputsGql;
};


export type MutationUpdateTransporterAdminArgs = {
  updateTransporterAdminInputs: UpdateTransporterAdminInputsGql;
};


export type MutationUpdateTransporterAgentActivationAdminArgs = {
  updateTransporterAgentActivationAdminInputs: UpdateTransporterAgentActivationAdminInputsGql;
};


export type MutationUpdateTransporterAgentAdminArgs = {
  updateTransporterAgentAdminInputs: UpdateTransporterAgentAdminInputsGql;
};


export type MutationUpdateUserActivationAdminArgs = {
  updateUserActivationAdmin: UpdateUserActivationAdminInputsGql;
};


export type MutationUpdateUserAdminArgs = {
  updateUserAdminInputs: UpdateUserAdminInputsGql;
};


export type MutationUpdateUserProvincesAdminArgs = {
  updateUserProvincesAdminInputs: UpdateUserProvincesAdminInputsGql;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Float'];
  edgeCount?: Maybe<Scalars['Float']>;
  edgesPerPage: Scalars['Float'];
  totalEdges: Scalars['Float'];
  totalPages: Scalars['Float'];
};

export type PaginatedCategory = {
  __typename?: 'PaginatedCategory';
  edges: Array<Category>;
  pageInfo: PageInfo;
};

export type PaginatedCity = {
  __typename?: 'PaginatedCity';
  edges: Array<City>;
  pageInfo: PageInfo;
};

export type PaginatedColor = {
  __typename?: 'PaginatedColor';
  edges: Array<Color>;
  pageInfo: PageInfo;
};

export type PaginatedCustomer = {
  __typename?: 'PaginatedCustomer';
  edges: Array<Customer>;
  pageInfo: PageInfo;
};

export type PaginatedMessage = {
  __typename?: 'PaginatedMessage';
  edges: Array<Message>;
  pageInfo: PageInfo;
};

export type PaginatedProducer = {
  __typename?: 'PaginatedProducer';
  edges: Array<Producer>;
  pageInfo: PageInfo;
};

export type PaginatedProducerAgent = {
  __typename?: 'PaginatedProducerAgent';
  edges: Array<ProducerAgent>;
  pageInfo: PageInfo;
};

export type PaginatedProduct = {
  __typename?: 'PaginatedProduct';
  edges: Array<Product>;
  pageInfo: PageInfo;
};

export type PaginatedProductProperty = {
  __typename?: 'PaginatedProductProperty';
  edges: Array<ProductProperty>;
  pageInfo: PageInfo;
};

export type PaginatedProductReview = {
  __typename?: 'PaginatedProductReview';
  edges: Array<ProductReview>;
  pageInfo: PageInfo;
};

export type PaginatedProject = {
  __typename?: 'PaginatedProject';
  edges: Array<Project>;
  pageInfo: PageInfo;
};

export type PaginatedProjectReview = {
  __typename?: 'PaginatedProjectReview';
  edges: Array<ProjectReview>;
  pageInfo: PageInfo;
};

export type PaginatedProperty = {
  __typename?: 'PaginatedProperty';
  edges: Array<Property>;
  pageInfo: PageInfo;
};

export type PaginatedProvince = {
  __typename?: 'PaginatedProvince';
  edges: Array<Province>;
  pageInfo: PageInfo;
};

export type PaginatedTransporter = {
  __typename?: 'PaginatedTransporter';
  edges: Array<Transporter>;
  pageInfo: PageInfo;
};

export type PaginatedTransporterAgent = {
  __typename?: 'PaginatedTransporterAgent';
  edges: Array<TransporterAgent>;
  pageInfo: PageInfo;
};

export type PaginatedUser = {
  __typename?: 'PaginatedUser';
  edges: Array<User>;
  pageInfo: PageInfo;
};

export type PaginationArgsGql = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Producer = {
  __typename?: 'Producer';
  address?: Maybe<Scalars['String']>;
  city: City;
  cityId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fileUses: Array<FileUse>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProducerAgent = {
  __typename?: 'ProducerAgent';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  producer: Producer;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  fileUses?: Maybe<Array<FileUse>>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  productCategories?: Maybe<Array<ProductCategory>>;
  productColors?: Maybe<Array<ProductColor>>;
  productProjects?: Maybe<Array<ProductProject>>;
  productProperties?: Maybe<Array<ProductProperty>>;
  productReviews?: Maybe<Array<ProductReview>>;
  slug: Scalars['String'];
  tagUses?: Maybe<Array<TagUse>>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  category: Category;
  categoryId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  productId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductColor = {
  __typename?: 'ProductColor';
  color: Color;
  colorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  productId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductProject = {
  __typename?: 'ProductProject';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductProperty = {
  __typename?: 'ProductProperty';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  productId: Scalars['String'];
  property: Property;
  propertyId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type ProductReview = {
  __typename?: 'ProductReview';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  fileUses: Array<FileUse>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  product: Product;
  productId: Scalars['String'];
  reviewer: Scalars['String'];
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Project = {
  __typename?: 'Project';
  city: City;
  cityId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  fileUses: Array<FileUse>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  projectReviews: Array<ProjectReview>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectReview = {
  __typename?: 'ProjectReview';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  fileUses: Array<FileUse>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  project: Project;
  projectId?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Property = {
  __typename?: 'Property';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  unit: PropertyUnitEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum PropertyUnitEnum {
  HeightMeter = 'height_meter',
  Unknow = 'unknow',
  WeightKilogram = 'weight_kilogram'
}

export type Province = {
  __typename?: 'Province';
  cities: Array<City>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  provinceUsers?: Maybe<Array<ProvinceUser>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProvinceUser = {
  __typename?: 'ProvinceUser';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  province: Province;
  provinceId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCategoriesAdmin: PaginatedCategory;
  getCategoriesPublic: PaginatedCategory;
  getCategoryByIdAdmin?: Maybe<Category>;
  getCitiesAdmin: PaginatedCity;
  getCityByIdAdmin?: Maybe<City>;
  getColorByIdAdmin?: Maybe<Color>;
  getColorsAdmin: PaginatedColor;
  getCustomerByIdAdmin?: Maybe<Customer>;
  getCustomersAdmin: PaginatedCustomer;
  getFileByIdAdmin?: Maybe<File>;
  getMessageByIdAdmin?: Maybe<Message>;
  getMessagesAdmin: PaginatedMessage;
  getProducerAgentByIdAdmin?: Maybe<ProducerAgent>;
  getProducerAgentsAdmin: PaginatedProducerAgent;
  getProducerByIdAdmin?: Maybe<Producer>;
  getProducersAdmin: PaginatedProducer;
  getProductByIdAdmin: Product;
  getProductByIdPublic: Product;
  getProductPropertiesAdmin: PaginatedProductProperty;
  getProductPropertyByIdAdmin: ProductProperty;
  getProductReviewByIdAdmin?: Maybe<ProductReview>;
  getProductReviewsAdmin: PaginatedProductReview;
  getProductsAdmin: PaginatedProduct;
  getProductsPublic: PaginatedProduct;
  getProjectByIdAdmin?: Maybe<Project>;
  getProjectByIdPublic?: Maybe<Project>;
  getProjectReviewByIdAdmin?: Maybe<ProjectReview>;
  getProjectReviewsAdmin: PaginatedProjectReview;
  getProjectsAdmin: PaginatedProject;
  getProjectsPublic: PaginatedProject;
  getPropertiesAdmin: PaginatedProperty;
  getPropertyByIdAdmin?: Maybe<Property>;
  getProvinceByIdAdmin?: Maybe<Province>;
  getProvincesAdmin: PaginatedProvince;
  getTransporterAgentByIdAdmin?: Maybe<TransporterAgent>;
  getTransporterAgentsAdmin: PaginatedTransporterAgent;
  getTransporterByIdAdmin?: Maybe<Transporter>;
  getTransportersAdmin: PaginatedTransporter;
  getUserByIdAdmin?: Maybe<User>;
  getUsersAdmin: PaginatedUser;
  getUsersPublic: PaginatedUser;
  loginAdmin: User;
  logoutAdmin?: Maybe<User>;
  meAdmin?: Maybe<User>;
};


export type QueryGetCategoriesAdminArgs = {
  getCategoriesAdminArgs: GetCategoriesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetCategoriesPublicArgs = {
  getCategoriesPublicArgs: GetCategoriesPublicArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetCategoryByIdAdminArgs = {
  categoryId: Scalars['String'];
};


export type QueryGetCitiesAdminArgs = {
  getCitiesAdminArgs: GetCitiesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetCityByIdAdminArgs = {
  cityId: Scalars['String'];
};


export type QueryGetColorByIdAdminArgs = {
  colorId: Scalars['String'];
};


export type QueryGetColorsAdminArgs = {
  getColorsAdminArgs: GetColorsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetCustomerByIdAdminArgs = {
  customerId: Scalars['String'];
};


export type QueryGetCustomersAdminArgs = {
  getCustomersAdminArgs: GetCustomersAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetFileByIdAdminArgs = {
  fileId: Scalars['String'];
};


export type QueryGetMessageByIdAdminArgs = {
  messageId: Scalars['String'];
};


export type QueryGetMessagesAdminArgs = {
  getMessagesAdminArgs: GetMessagesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProducerAgentByIdAdminArgs = {
  producerAgentId: Scalars['String'];
};


export type QueryGetProducerAgentsAdminArgs = {
  getProducerAgentsAdminArgs: GetProducerAgentsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProducerByIdAdminArgs = {
  producerId: Scalars['String'];
};


export type QueryGetProducersAdminArgs = {
  getProducersAdminArgs: GetProducersAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProductByIdAdminArgs = {
  productId: Scalars['String'];
};


export type QueryGetProductByIdPublicArgs = {
  identity: Scalars['String'];
};


export type QueryGetProductPropertiesAdminArgs = {
  getProductPropertiesAdminArgs: GetProductPropertiesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProductPropertyByIdAdminArgs = {
  productPropertyId: Scalars['String'];
};


export type QueryGetProductReviewByIdAdminArgs = {
  productReviewId: Scalars['String'];
};


export type QueryGetProductReviewsAdminArgs = {
  getProductReviewsAdminArgs: GetProductReviewsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProductsAdminArgs = {
  getProductsAdminArgs: GetProductsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProductsPublicArgs = {
  getProductsPublicArgs: GetProductsPublicArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProjectByIdAdminArgs = {
  projectId: Scalars['String'];
};


export type QueryGetProjectByIdPublicArgs = {
  identity: Scalars['String'];
};


export type QueryGetProjectReviewByIdAdminArgs = {
  projectReviewId: Scalars['String'];
};


export type QueryGetProjectReviewsAdminArgs = {
  getProjectReviewsAdminArgs: GetProjectReviewsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProjectsAdminArgs = {
  getProjectsAdminArgs: GetProjectsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetProjectsPublicArgs = {
  getProjectsPublicArgs: GetProjectsPublicArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetPropertiesAdminArgs = {
  getPropertiesAdminArgs: GetPropertiesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetPropertyByIdAdminArgs = {
  propertyId: Scalars['String'];
};


export type QueryGetProvinceByIdAdminArgs = {
  provinceId: Scalars['String'];
};


export type QueryGetProvincesAdminArgs = {
  getProvincesAdminArgs: GetProvincesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetTransporterAgentByIdAdminArgs = {
  transporterAgentId: Scalars['String'];
};


export type QueryGetTransporterAgentsAdminArgs = {
  getTransporterAgentsAdminArgs: GetTransporterAgentsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetTransporterByIdAdminArgs = {
  transporterId: Scalars['String'];
};


export type QueryGetTransportersAdminArgs = {
  getTransportersAdminArgs: GetTransportersAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetUserByIdAdminArgs = {
  userId: Scalars['String'];
};


export type QueryGetUsersAdminArgs = {
  getUsersAdminArgs: GetUsersAdminArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryGetUsersPublicArgs = {
  getUsersPublicArgs: GetUsersPublicArgsGql;
  paginationArgs: PaginationArgsGql;
};


export type QueryLoginAdminArgs = {
  loginAdminInputs: LoginAdminInputsGql;
};

export type RemoveImageAdminInputsGql = {
  fileId: Scalars['String'];
};

export type RemoveImageFromProducerAdminInputsGql = {
  fileUseId: Scalars['String'];
};

export type RemoveImageFromProductAdminInputsGql = {
  fileUseId: Scalars['String'];
};

export type RemoveImageFromProjectAdminInputsGql = {
  fileUseId: Scalars['String'];
};

export type RemoveImageFromTransporterAdminInputsGql = {
  fileUseId: Scalars['String'];
};

export type RemoveImageFromUserAdminInputsGql = {
  fileUseId: Scalars['String'];
};

export type RemovePropertyFromProductAdminInputsGql = {
  productPropertyId: Scalars['String'];
};

export type TagUse = {
  __typename?: 'TagUse';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Transporter = {
  __typename?: 'Transporter';
  address?: Maybe<Scalars['String']>;
  city: City;
  cityId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  fileUses: Array<FileUse>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransporterAgent = {
  __typename?: 'TransporterAgent';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  transporter: Transporter;
  transporterId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateCategoryActivationAdminInputsGql = {
  categoryId: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type UpdateCategoryAdminInputsGql = {
  categoryId: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type UpdateCityAdminInputsGql = {
  cityId: Scalars['String'];
  name: Scalars['String'];
  provinceId: Scalars['String'];
};

export type UpdateColorAdminInputsGql = {
  colorId: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type UpdateCustomerActivationAdminInputsGql = {
  customerId: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type UpdateCustomerAdminInputsGql = {
  cityId: Scalars['String'];
  customerId: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  officePhone?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateMessageActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  messageId: Scalars['String'];
};

export type UpdateMessageAdminInputsGql = {
  customerIds: Array<Scalars['String']>;
  isActive: Scalars['Boolean'];
  messageId: Scalars['String'];
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type UpdateProducerActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  producerId: Scalars['String'];
};

export type UpdateProducerAdminInputsGql = {
  address: Scalars['String'];
  cityId?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  producerId: Scalars['String'];
};

export type UpdateProducerAgentActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  producerAgentId: Scalars['String'];
};

export type UpdateProducerAgentAdminInputsGql = {
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  producerAgentId: Scalars['String'];
};

export type UpdateProductActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  productId: Scalars['String'];
};

export type UpdateProductAdminInputsGql = {
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  productId: Scalars['String'];
  slug: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};

export type UpdateProductReviewAdminInputsGql = {
  fileId?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  productId?: InputMaybe<Scalars['String']>;
  productReviewId?: InputMaybe<Scalars['String']>;
  reviewer?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  projectId: Scalars['String'];
};

export type UpdateProjectAdminInputsGql = {
  cityId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  lat?: InputMaybe<Scalars['Float']>;
  long?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
  slug: Scalars['String'];
};

export type UpdateProjectReviewAdminInputsGql = {
  fileId: Scalars['String'];
  isActive: Scalars['Boolean'];
  projectId: Scalars['String'];
  projectReviewId: Scalars['String'];
  reviewer: Scalars['String'];
  text: Scalars['String'];
};

export type UpdatePropertyActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  propertyId: Scalars['String'];
};

export type UpdatePropertyAdminInputsGql = {
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  propertyId: Scalars['String'];
  unit: PropertyUnitEnum;
};

export type UpdatePropertyOfProductAdminInputsGql = {
  productPropertyId: Scalars['String'];
  value: Scalars['String'];
};

export type UpdateProvinceAdminInputsGql = {
  name: Scalars['String'];
  provinceId: Scalars['String'];
};

export type UpdateTransporterActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  transporterId: Scalars['String'];
};

export type UpdateTransporterAdminInputsGql = {
  address: Scalars['String'];
  cityId?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  transporterId: Scalars['String'];
};

export type UpdateTransporterAgentActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  transporterAgentId: Scalars['String'];
};

export type UpdateTransporterAgentAdminInputsGql = {
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  transporterAgentId: Scalars['String'];
};

export type UpdateUserActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  userId: Scalars['String'];
};

export type UpdateUserAdminInputsGql = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  roles: Array<UserRoleEnum>;
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateUserProvincesAdminInputsGql = {
  provinceIds: Array<Scalars['String']>;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fileUses: Array<FileUse>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  provinceUsers: Array<ProvinceUser>;
  roles: Array<UserRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export enum UserRoleEnum {
  AdminContent = 'admin_content',
  AdminCustomer = 'admin_customer',
  AdminEvent = 'admin_event',
  AdminMessage = 'admin_message',
  AdminProducer = 'admin_producer',
  AdminProduct = 'admin_product',
  AdminTransporter = 'admin_transporter',
  Employee = 'employee',
  SupperAdmin = 'supper_admin'
}

export type GetUsersPublicQueryVariables = Exact<{
  getUsersPublicArgs: GetUsersPublicArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetUsersPublicQuery = { __typename?: 'Query', getUsersPublic: { __typename?: 'PaginatedUser', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, phone?: string | null, email?: string | null, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', filename: string, id: string } }>, provinceUsers: Array<{ __typename?: 'ProvinceUser', id: string, province: { __typename?: 'Province', id: string, name: string } }> }> } };

export type GetProductsPublicProductPageQueryVariables = Exact<{
  getProductsPublicArgs: GetProductsPublicArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProductsPublicProductPageQuery = { __typename?: 'Query', getProductsPublic: { __typename?: 'PaginatedProduct', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Product', slug: string, id: string, name: string, isActive?: boolean | null, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, fileUses?: Array<{ __typename?: 'FileUse', id: string, status: FileUseStatusEnum, type: FileUseTypeEnum, isPublic?: boolean | null, file: { __typename?: 'File', filename: string, size: number, id: string } }> | null }> } };

export type GetCategoriesPublicProductPageQueryVariables = Exact<{
  getCategoriesPublicArgs: GetCategoriesPublicArgsGql;
}>;


export type GetCategoriesPublicProductPageQuery = { __typename?: 'Query', getCategoriesPublic: { __typename?: 'PaginatedCategory', edges: Array<{ __typename?: 'Category', id: string, name: string }> } };

export type GetProductByIdPublicProductPageQueryVariables = Exact<{
  identity: Scalars['String'];
}>;


export type GetProductByIdPublicProductPageQuery = { __typename?: 'Query', getProductByIdPublic: { __typename?: 'Product', id: string, name: string, slug: string, isActive?: boolean | null, text: string, productReviews?: Array<{ __typename?: 'ProductReview', id: string, reviewer: string, text: string, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> }> | null, productProperties?: Array<{ __typename?: 'ProductProperty', id: string, value: string, property: { __typename?: 'Property', name: string, unit: PropertyUnitEnum } }> | null, productColors?: Array<{ __typename?: 'ProductColor', id: string, colorId: string, color: { __typename?: 'Color', id: string, value: string, name: string } }> | null, productCategories?: Array<{ __typename?: 'ProductCategory', id: string, categoryId: string, category: { __typename?: 'Category', id: string, name: string } }> | null, fileUses?: Array<{ __typename?: 'FileUse', file: { __typename?: 'File', id: string, filename: string, path: string } }> | null } };

export type GetProjectsPublicProductPageQueryVariables = Exact<{
  getProjectsPublicArgs: GetProjectsPublicArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProjectsPublicProductPageQuery = { __typename?: 'Query', getProjectsPublic: { __typename?: 'PaginatedProject', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Project', id: string, createdAt: any, name: string, slug: string, isActive?: boolean | null, lat?: number | null, long?: number | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', filename: string, id: string } }> }> } };

export type GetProductsPublicSearchboxQueryVariables = Exact<{
  getProductsPublicArgs: GetProductsPublicArgsGql;
}>;


export type GetProductsPublicSearchboxQuery = { __typename?: 'Query', getProductsPublic: { __typename?: 'PaginatedProduct', edges: Array<{ __typename?: 'Product', id: string, name: string, slug: string, text: string, fileUses?: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> | null }> } };

export type GetProjectsPublicSearchboxQueryVariables = Exact<{
  getProjectsPublicArgs: GetProjectsPublicArgsGql;
}>;


export type GetProjectsPublicSearchboxQuery = { __typename?: 'Query', getProjectsPublic: { __typename?: 'PaginatedProject', edges: Array<{ __typename?: 'Project', id: string, createdAt: any, name: string, slug: string, isActive?: boolean | null, description?: string | null, lat?: number | null, long?: number | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', filename: string, id: string } }> }> } };


export const GetUsersPublicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsersPublic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getUsersPublicArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUsersPublicArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsersPublic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getUsersPublicArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getUsersPublicArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"provinceUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersPublicQuery, GetUsersPublicQueryVariables>;
export const GetProductsPublicProductPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductsPublicProductPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProductsPublicArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductsPublicArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductsPublic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProductsPublicArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProductsPublicArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsPublicProductPageQuery, GetProductsPublicProductPageQueryVariables>;
export const GetCategoriesPublicProductPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategoriesPublicProductPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCategoriesPublicArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCategoriesPublicArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategoriesPublic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getCategoriesPublicArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCategoriesPublicArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesPublicProductPageQuery, GetCategoriesPublicProductPageQueryVariables>;
export const GetProductByIdPublicProductPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductByIdPublicProductPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"identity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductByIdPublic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"identity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"identity"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"productReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"colorId"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductByIdPublicProductPageQuery, GetProductByIdPublicProductPageQueryVariables>;
export const GetProjectsPublicProductPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectsPublicProductPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProjectsPublicArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProjectsPublicArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectsPublic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProjectsPublicArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProjectsPublicArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"long"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsPublicProductPageQuery, GetProjectsPublicProductPageQueryVariables>;
export const GetProductsPublicSearchboxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductsPublicSearchbox"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProductsPublicArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductsPublicArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductsPublic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProductsPublicArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProductsPublicArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsPublicSearchboxQuery, GetProductsPublicSearchboxQueryVariables>;
export const GetProjectsPublicSearchboxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectsPublicSearchbox"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProjectsPublicArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProjectsPublicArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectsPublic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProjectsPublicArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProjectsPublicArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"long"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsPublicSearchboxQuery, GetProjectsPublicSearchboxQueryVariables>;