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
  TransporterAction = 'transporter_action'
}

export type GetCategoriesAdminArgsGql = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
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
  getProductPropertiesAdmin: PaginatedProductProperty;
  getProductPropertyByIdAdmin: ProductProperty;
  getProductReviewByIdAdmin?: Maybe<ProductReview>;
  getProductReviewsAdmin: PaginatedProductReview;
  getProductsAdmin: PaginatedProduct;
  getProjectByIdAdmin?: Maybe<Project>;
  getProjectReviewByIdAdmin?: Maybe<ProjectReview>;
  getProjectReviewsAdmin: PaginatedProjectReview;
  getProjectsAdmin: PaginatedProject;
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
  loginAdmin: User;
  logoutAdmin?: Maybe<User>;
  meAdmin?: Maybe<User>;
};


export type QueryGetCategoriesAdminArgs = {
  getCategoriesAdminArgs: GetCategoriesAdminArgsGql;
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


export type QueryGetProjectByIdAdminArgs = {
  projectId: Scalars['String'];
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

export type GetCitiesAdminAutoCompleteQueryVariables = Exact<{
  getCitiesAdminArgs: GetCitiesAdminArgsGql;
}>;


export type GetCitiesAdminAutoCompleteQuery = { __typename?: 'Query', getCitiesAdmin: { __typename?: 'PaginatedCity', edges: Array<{ __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } }> } };

export type GetCategoriesAdminAutoCompleteMultiQueryVariables = Exact<{
  getCategoriesAdminArgs: GetCategoriesAdminArgsGql;
}>;


export type GetCategoriesAdminAutoCompleteMultiQuery = { __typename?: 'Query', getCategoriesAdmin: { __typename?: 'PaginatedCategory', edges: Array<{ __typename?: 'Category', id: string, name: string }> } };

export type GetColorsAdminAutoCompleteMultiQueryVariables = Exact<{
  getColorsAdminArgs: GetColorsAdminArgsGql;
}>;


export type GetColorsAdminAutoCompleteMultiQuery = { __typename?: 'Query', getColorsAdmin: { __typename?: 'PaginatedColor', edges: Array<{ __typename?: 'Color', id: string, name: string, value: string }> } };

export type GetCustomersAdminAutoCompleteMultiQueryVariables = Exact<{
  getCustomersAdminArgs: GetCustomersAdminArgsGql;
}>;


export type GetCustomersAdminAutoCompleteMultiQuery = { __typename?: 'Query', getCustomersAdmin: { __typename?: 'PaginatedCustomer', edges: Array<{ __typename?: 'Customer', id: string, firstName: string, lastName?: string | null, jobTitle?: string | null }> } };

export type GetProvincesAdminAutoCompleteMultiQueryVariables = Exact<{
  getProvincesAdminArgs: GetProvincesAdminArgsGql;
}>;


export type GetProvincesAdminAutoCompleteMultiQuery = { __typename?: 'Query', getProvincesAdmin: { __typename?: 'PaginatedProvince', edges: Array<{ __typename?: 'Province', id: string, name: string }> } };

export type GetProducersAdminAutoCompleteQueryVariables = Exact<{
  getProducersAdminArgs: GetProducersAdminArgsGql;
}>;


export type GetProducersAdminAutoCompleteQuery = { __typename?: 'Query', getProducersAdmin: { __typename?: 'PaginatedProducer', edges: Array<{ __typename?: 'Producer', id: string, name?: string | null, city: { __typename?: 'City', name: string, id: string, province: { __typename?: 'Province', id: string, name: string } } }> } };

export type GetPropertiesAdminAutoCompleteQueryVariables = Exact<{
  getPropertiesAdminArgs: GetPropertiesAdminArgsGql;
}>;


export type GetPropertiesAdminAutoCompleteQuery = { __typename?: 'Query', getPropertiesAdmin: { __typename?: 'PaginatedProperty', edges: Array<{ __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null }> } };

export type GetProvincesAdminAutoCompleteQueryVariables = Exact<{
  getProvincesAdminArgs: GetProvincesAdminArgsGql;
}>;


export type GetProvincesAdminAutoCompleteQuery = { __typename?: 'Query', getProvincesAdmin: { __typename?: 'PaginatedProvince', edges: Array<{ __typename?: 'Province', id: string, name: string }> } };

export type GetTransportersAdminAutoCompleteQueryVariables = Exact<{
  getTransportersAdminArgs: GetTransportersAdminArgsGql;
}>;


export type GetTransportersAdminAutoCompleteQuery = { __typename?: 'Query', getTransportersAdmin: { __typename?: 'PaginatedTransporter', edges: Array<{ __typename?: 'Transporter', id: string, name: string, city: { __typename?: 'City', name: string, id: string, province: { __typename?: 'Province', id: string, name: string } } }> } };

export type GetUsersAdminAutoCompleteQueryVariables = Exact<{
  getUsersAdminArgs: GetUsersAdminArgsGql;
}>;


export type GetUsersAdminAutoCompleteQuery = { __typename?: 'Query', getUsersAdmin: { __typename?: 'PaginatedUser', edges: Array<{ __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null }> } };

export type RemoveImageAdminMutationVariables = Exact<{
  removeImageAdmin: RemoveImageAdminInputsGql;
}>;


export type RemoveImageAdminMutation = { __typename?: 'Mutation', removeImageAdmin: { __typename?: 'File', id: string, filename: string } };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: { __typename?: 'File', id: string, path: string, filename: string } };

export type GetFileByIdAdminQueryVariables = Exact<{
  fileId: Scalars['String'];
}>;


export type GetFileByIdAdminQuery = { __typename?: 'Query', getFileByIdAdmin?: { __typename?: 'File', id: string, filename: string } | null };

export type LogoutAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutAdminQuery = { __typename?: 'Query', logoutAdmin?: { __typename?: 'User', id: string } | null };

export type GetCategoriesAdminQueryVariables = Exact<{
  getCategoriesAdminArgs: GetCategoriesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetCategoriesAdminQuery = { __typename?: 'Query', getCategoriesAdmin: { __typename?: 'PaginatedCategory', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Category', id: string, name: string, isActive?: boolean | null }> } };

export type UpdateCategoryActivationAdminMutationVariables = Exact<{
  updateCategoryActivationAdminInputs: UpdateCategoryActivationAdminInputsGql;
}>;


export type UpdateCategoryActivationAdminMutation = { __typename?: 'Mutation', updateCategoryActivationAdmin: { __typename?: 'Category', id: string, name: string, isActive?: boolean | null } };

export type CreateCategoryAdminMutationVariables = Exact<{
  createCategoryAdminInputs: CreateCategoryAdminInputsGql;
}>;


export type CreateCategoryAdminMutation = { __typename?: 'Mutation', createCategoryAdmin: { __typename?: 'Category', id: string, name: string, isActive?: boolean | null } };

export type UpdateCategoryAdminMutationVariables = Exact<{
  updateCategoryAdminInputs: UpdateCategoryAdminInputsGql;
}>;


export type UpdateCategoryAdminMutation = { __typename?: 'Mutation', updateCategoryAdmin: { __typename?: 'Category', id: string, name: string, isActive?: boolean | null } };

export type GetCategoryByIdAdminQueryVariables = Exact<{
  categoryId: Scalars['String'];
}>;


export type GetCategoryByIdAdminQuery = { __typename?: 'Query', getCategoryByIdAdmin?: { __typename?: 'Category', id: string, name: string, isActive?: boolean | null } | null };

export type GetCitiesAdminQueryVariables = Exact<{
  getCitiesAdminArgs: GetCitiesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetCitiesAdminQuery = { __typename?: 'Query', getCitiesAdmin: { __typename?: 'PaginatedCity', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } }> } };

export type CreateCityAdminMutationVariables = Exact<{
  createCityAdminInputs: CreateCityAdminInputsGql;
}>;


export type CreateCityAdminMutation = { __typename?: 'Mutation', createCityAdmin: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } };

export type UpdateCityAdminMutationVariables = Exact<{
  updateCityAdminInputs: UpdateCityAdminInputsGql;
}>;


export type UpdateCityAdminMutation = { __typename?: 'Mutation', updateCityAdmin: { __typename?: 'City', id: string, name: string, provinceId: string, province: { __typename?: 'Province', name: string, id: string } } };

export type GetCityByIdAdminQueryVariables = Exact<{
  cityId: Scalars['String'];
}>;


export type GetCityByIdAdminQuery = { __typename?: 'Query', getCityByIdAdmin?: { __typename?: 'City', id: string, name: string, provinceId: string, province: { __typename?: 'Province', name: string, id: string } } | null };

export type GetCustomersAdminQueryVariables = Exact<{
  getCustomersAdminArgs: GetCustomersAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetCustomersAdminQuery = { __typename?: 'Query', getCustomersAdmin: { __typename?: 'PaginatedCustomer', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Customer', id: string, firstName: string, lastName?: string | null, email?: string | null, jobTitle?: string | null, phone?: string | null, officePhone?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } }> } };

export type UpdateCustomerActivationAdminMutationVariables = Exact<{
  updateCustomerActivationAdmin: UpdateCustomerActivationAdminInputsGql;
}>;


export type UpdateCustomerActivationAdminMutation = { __typename?: 'Mutation', updateCustomerActivationAdmin: { __typename?: 'Customer', id: string, isActive?: boolean | null } };

export type CreateCustomerAdminMutationVariables = Exact<{
  createCustomerAdminInputs: CreateCustomerAdminInputsGql;
}>;


export type CreateCustomerAdminMutation = { __typename?: 'Mutation', createCustomerAdmin: { __typename?: 'Customer', id: string, firstName: string, lastName?: string | null, email?: string | null, jobTitle?: string | null, phone?: string | null, officePhone?: string | null, isActive?: boolean | null } };

export type UpdateCustomerAdminMutationVariables = Exact<{
  updateCustomerAdminInputs: UpdateCustomerAdminInputsGql;
}>;


export type UpdateCustomerAdminMutation = { __typename?: 'Mutation', updateCustomerAdmin: { __typename?: 'Customer', id: string, firstName: string, lastName?: string | null, email?: string | null, jobTitle?: string | null, phone?: string | null, officePhone?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', name: string, id: string, province: { __typename?: 'Province', id: string, name: string } } } };

export type GetCustomerByIdAdminQueryVariables = Exact<{
  customerId: Scalars['String'];
}>;


export type GetCustomerByIdAdminQuery = { __typename?: 'Query', getCustomerByIdAdmin?: { __typename?: 'Customer', id: string, firstName: string, lastName?: string | null, email?: string | null, jobTitle?: string | null, phone?: string | null, officePhone?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', name: string, id: string, province: { __typename?: 'Province', id: string, name: string } } } | null };

export type GetMessagesAdminQueryVariables = Exact<{
  getMessagesAdminArgs: GetMessagesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetMessagesAdminQuery = { __typename?: 'Query', getMessagesAdmin: { __typename?: 'PaginatedMessage', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Message', id: string, text: string, count: number, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, isActive?: boolean | null, isSubmited?: boolean | null, userId: string, user: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null }, customerMessages: Array<{ __typename?: 'CustomerMessage', id: string, customer: { __typename?: 'Customer', id: string, email?: string | null, jobTitle?: string | null, firstName: string, lastName?: string | null, phone?: string | null, officePhone?: string | null, isActive?: boolean | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } }> }> } };

export type UpdateMessageActivationAdminMutationVariables = Exact<{
  updateMessageActivationAdminInputs: UpdateMessageActivationAdminInputsGql;
}>;


export type UpdateMessageActivationAdminMutation = { __typename?: 'Mutation', updateMessageActivationAdmin: { __typename?: 'Message', id: string, isActive?: boolean | null } };

export type CreateMessageAdminMutationVariables = Exact<{
  createMessageAdminInputs: CreateMessageAdminInputsGql;
}>;


export type CreateMessageAdminMutation = { __typename?: 'Mutation', createMessageAdmin: { __typename?: 'Message', id: string, text: string, count: number, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, isActive?: boolean | null, isSubmited?: boolean | null, userId: string, user: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null }, customerMessages: Array<{ __typename?: 'CustomerMessage', id: string, customer: { __typename?: 'Customer', id: string, email?: string | null, jobTitle?: string | null, firstName: string, lastName?: string | null, phone?: string | null, officePhone?: string | null, isActive?: boolean | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } }> } };

export type UpdateMessageAdminMutationVariables = Exact<{
  updateMessageAdminInputs: UpdateMessageAdminInputsGql;
}>;


export type UpdateMessageAdminMutation = { __typename?: 'Mutation', updateMessageAdmin: { __typename?: 'Message', id: string, text: string, count: number, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, isActive?: boolean | null, isSubmited?: boolean | null, userId: string, user: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null }, customerMessages: Array<{ __typename?: 'CustomerMessage', id: string, customer: { __typename?: 'Customer', id: string, email?: string | null, jobTitle?: string | null, firstName: string, lastName?: string | null, phone?: string | null, officePhone?: string | null, isActive?: boolean | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } }> } };

export type GetMessageByIdAdminQueryVariables = Exact<{
  messageId: Scalars['String'];
}>;


export type GetMessageByIdAdminQuery = { __typename?: 'Query', getMessageByIdAdmin?: { __typename?: 'Message', id: string, text: string, count: number, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, isActive?: boolean | null, isSubmited?: boolean | null, userId: string, user: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null }, customerMessages: Array<{ __typename?: 'CustomerMessage', id: string, customer: { __typename?: 'Customer', id: string, email?: string | null, jobTitle?: string | null, firstName: string, lastName?: string | null, phone?: string | null, officePhone?: string | null, isActive?: boolean | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } }> } | null };

export type GetProducerAgentsAdminQueryVariables = Exact<{
  getProducerAgentsAdminArgs: GetProducerAgentsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProducerAgentsAdminQuery = { __typename?: 'Query', getProducerAgentsAdmin: { __typename?: 'PaginatedProducerAgent', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'ProducerAgent', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, description?: string | null, isActive?: boolean | null, producer: { __typename?: 'Producer', id: string, name?: string | null, phone?: string | null, email?: string | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } }> } };

export type UpdateProducerAgentActivationAdminMutationVariables = Exact<{
  updateProducerAgentActivationAdmin: UpdateProducerAgentActivationAdminInputsGql;
}>;


export type UpdateProducerAgentActivationAdminMutation = { __typename?: 'Mutation', updateProducerAgentActivationAdmin: { __typename?: 'ProducerAgent', id: string, isActive?: boolean | null } };

export type CreateProducerAgentAdminMutationVariables = Exact<{
  createProducerAgentAdminInputs: CreateProducerAgentAdminInputsGql;
}>;


export type CreateProducerAgentAdminMutation = { __typename?: 'Mutation', createProducerAgentAdmin: { __typename?: 'ProducerAgent', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, description?: string | null, isActive?: boolean | null, producer: { __typename?: 'Producer', id: string, name?: string | null, phone?: string | null, email?: string | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } } };

export type UpdateProducerAgentAdminMutationVariables = Exact<{
  updateProducerAgentAdminInputs: UpdateProducerAgentAdminInputsGql;
}>;


export type UpdateProducerAgentAdminMutation = { __typename?: 'Mutation', updateProducerAgentAdmin: { __typename?: 'ProducerAgent', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, description?: string | null, isActive?: boolean | null, producer: { __typename?: 'Producer', id: string, name?: string | null, phone?: string | null, email?: string | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } } };

export type GetProducerAgentByIdAdminQueryVariables = Exact<{
  producerAgentId: Scalars['String'];
}>;


export type GetProducerAgentByIdAdminQuery = { __typename?: 'Query', getProducerAgentByIdAdmin?: { __typename?: 'ProducerAgent', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, description?: string | null, isActive?: boolean | null, producer: { __typename?: 'Producer', id: string, name?: string | null, phone?: string | null, email?: string | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } } | null };

export type GetProducersAdminQueryVariables = Exact<{
  getProducersAdminArgs: GetProducersAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProducersAdminQuery = { __typename?: 'Query', getProducersAdmin: { __typename?: 'PaginatedProducer', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Producer', id: string, email?: string | null, name?: string | null, description?: string | null, address?: string | null, phone?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } }> } };

export type UpdateProducerActivationAdminMutationVariables = Exact<{
  updateProducerActivationAdmin: UpdateProducerActivationAdminInputsGql;
}>;


export type UpdateProducerActivationAdminMutation = { __typename?: 'Mutation', updateProducerActivationAdmin: { __typename?: 'Producer', id: string, isActive?: boolean | null } };

export type CreateProducerAdminMutationVariables = Exact<{
  createProducerAdminInputs: CreateProducerAdminInputsGql;
}>;


export type CreateProducerAdminMutation = { __typename?: 'Mutation', createProducerAdmin: { __typename?: 'Producer', id: string, name?: string | null, phone?: string | null, email?: string | null, description?: string | null, address?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } } };

export type UpdateProducerAdminMutationVariables = Exact<{
  updateProducerAdminInputs: UpdateProducerAdminInputsGql;
}>;


export type UpdateProducerAdminMutation = { __typename?: 'Mutation', updateProducerAdmin: { __typename?: 'Producer', id: string, name?: string | null, phone?: string | null, email?: string | null, description?: string | null, address?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } } };

export type GetProducerByIdAdminQueryVariables = Exact<{
  producerId: Scalars['String'];
}>;


export type GetProducerByIdAdminQuery = { __typename?: 'Query', getProducerByIdAdmin?: { __typename?: 'Producer', id: string, name?: string | null, phone?: string | null, email?: string | null, description?: string | null, address?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } } | null };

export type GetProductByIdAdminQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type GetProductByIdAdminQuery = { __typename?: 'Query', getProductByIdAdmin: { __typename?: 'Product', id: string, name: string, slug: string, isActive?: boolean | null, text: string, productColors?: Array<{ __typename?: 'ProductColor', id: string, colorId: string, color: { __typename?: 'Color', id: string, value: string, name: string } }> | null, productCategories?: Array<{ __typename?: 'ProductCategory', id: string, categoryId: string, category: { __typename?: 'Category', id: string, name: string } }> | null, fileUses?: Array<{ __typename?: 'FileUse', file: { __typename?: 'File', id: string, filename: string, path: string } }> | null } };

export type AddCategoriesToProductAdminMutationVariables = Exact<{
  addCategoriesToProductAdminInputs: AddCategoriesToProductAdminInputsGql;
}>;


export type AddCategoriesToProductAdminMutation = { __typename?: 'Mutation', addCategoriesToProductAdmin: { __typename?: 'Product', id: string, name: string, productCategories?: Array<{ __typename?: 'ProductCategory', id: string, categoryId: string, category: { __typename?: 'Category', id: string, name: string } }> | null } };

export type AddColorsToProductAdminMutationVariables = Exact<{
  addColorsToProductAdminInputs: AddColorsToProductAdminInputsGql;
}>;


export type AddColorsToProductAdminMutation = { __typename?: 'Mutation', addColorsToProductAdmin: { __typename?: 'Product', id: string, name: string, productColors?: Array<{ __typename?: 'ProductColor', id: string, colorId: string, color: { __typename?: 'Color', id: string, value: string, name: string } }> | null } };

export type UpdateProductAdminMutationVariables = Exact<{
  updateProductAdminInputs: UpdateProductAdminInputsGql;
}>;


export type UpdateProductAdminMutation = { __typename?: 'Mutation', updateProductAdmin: { __typename?: 'Product', slug: string, id: string, name: string, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, isActive?: boolean | null, text: string } };

export type AddImageToProductAdminMutationVariables = Exact<{
  addImageToProductAdmin: AddImageToProductAdminInputsGql;
}>;


export type AddImageToProductAdminMutation = { __typename?: 'Mutation', addImageToProductAdmin: { __typename?: 'Product', id: string } };

export type UpdatePropertyOfProductAdminMutationVariables = Exact<{
  updatePropertyOfProductAdminInputs: UpdatePropertyOfProductAdminInputsGql;
}>;


export type UpdatePropertyOfProductAdminMutation = { __typename?: 'Mutation', updatePropertyOfProductAdmin: { __typename?: 'ProductProperty', id: string, value: string, property: { __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null } } };

export type GetProductPropertyByIdAdminQueryVariables = Exact<{
  productPropertyId: Scalars['String'];
}>;


export type GetProductPropertyByIdAdminQuery = { __typename?: 'Query', getProductPropertyByIdAdmin: { __typename?: 'ProductProperty', id: string, value: string, property: { __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null } } };

export type GetProductPropertiesAdminQueryVariables = Exact<{
  getProductPropertiesAdminArgs: GetProductPropertiesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProductPropertiesAdminQuery = { __typename?: 'Query', getProductPropertiesAdmin: { __typename?: 'PaginatedProductProperty', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'ProductProperty', id: string, value: string, property: { __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null } }> } };

export type RemovePropertyFromProductAdminInputsMutationVariables = Exact<{
  removePropertyFromProductAdminInputs: RemovePropertyFromProductAdminInputsGql;
}>;


export type RemovePropertyFromProductAdminInputsMutation = { __typename?: 'Mutation', removePropertyFromProductAdmin: { __typename?: 'Product', id: string, isActive?: boolean | null } };

export type AddPropertyToProductAdminInputsMutationVariables = Exact<{
  addPropertyToProductAdminInputs: AddPropertyToProductAdminInputsGql;
}>;


export type AddPropertyToProductAdminInputsMutation = { __typename?: 'Mutation', addPropertyToProductAdmin: { __typename?: 'ProductProperty', id: string, value: string } };

export type UpdateProductReviewAdminMutationVariables = Exact<{
  updateProductReviewAdminInputs: UpdateProductReviewAdminInputsGql;
}>;


export type UpdateProductReviewAdminMutation = { __typename?: 'Mutation', updateProductReviewAdmin: { __typename?: 'ProductReview', id: string, createdAt: any, reviewer: string, text: string, productId: string, isActive?: boolean | null, product: { __typename?: 'Product', name: string, id: string }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> } };

export type GetProductReviewByIdAdminQueryVariables = Exact<{
  productReviewId: Scalars['String'];
}>;


export type GetProductReviewByIdAdminQuery = { __typename?: 'Query', getProductReviewByIdAdmin?: { __typename?: 'ProductReview', id: string, createdAt: any, reviewer: string, text: string, productId: string, isActive?: boolean | null, product: { __typename?: 'Product', name: string, id: string }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> } | null };

export type GetProductReviewsAdminQueryVariables = Exact<{
  getProductReviewsAdminArgs: GetProductReviewsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProductReviewsAdminQuery = { __typename?: 'Query', getProductReviewsAdmin: { __typename?: 'PaginatedProductReview', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'ProductReview', id: string, createdAt: any, reviewer: string, text: string, productId: string, product: { __typename?: 'Product', name: string, id: string }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> }> } };

export type DeleteProductReviewAdminMutationVariables = Exact<{
  deleteProductReviewAdmin: DeleteProductReviewAdminInputsGql;
}>;


export type DeleteProductReviewAdminMutation = { __typename?: 'Mutation', deleteProductReviewAdmin: { __typename?: 'ProductReview', id: string, isActive?: boolean | null } };

export type CreateProductReviewAdminMutationVariables = Exact<{
  createProductReviewAdminInputs: CreateProductReviewAdminInputsGql;
}>;


export type CreateProductReviewAdminMutation = { __typename?: 'Mutation', createProductReviewAdmin: { __typename?: 'ProductReview', id: string, createdAt: any, reviewer: string, text: string, product: { __typename?: 'Product', name: string, id: string }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> } };

export type GetProductsAdminQueryVariables = Exact<{
  getProductsAdminArgs: GetProductsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProductsAdminQuery = { __typename?: 'Query', getProductsAdmin: { __typename?: 'PaginatedProduct', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Product', slug: string, id: string, name: string, isActive?: boolean | null, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, text: string, productProperties?: Array<{ __typename?: 'ProductProperty', id: string, value: string, property: { __typename?: 'Property', name: string, unit: PropertyUnitEnum } }> | null, fileUses?: Array<{ __typename?: 'FileUse', id: string, status: FileUseStatusEnum, type: FileUseTypeEnum, isPublic?: boolean | null, file: { __typename?: 'File', filename: string, size: number, id: string } }> | null }> } };

export type UpdateProductActivationAdminMutationVariables = Exact<{
  updateProductActivationAdmin: UpdateProductActivationAdminInputsGql;
}>;


export type UpdateProductActivationAdminMutation = { __typename?: 'Mutation', updateProductActivationAdmin: { __typename?: 'Product', id: string, isActive?: boolean | null } };

export type CreateProductAdminMutationVariables = Exact<{
  createProductAdminInputs: CreateProductAdminInputsGql;
}>;


export type CreateProductAdminMutation = { __typename?: 'Mutation', createProductAdmin: { __typename?: 'Product', slug: string, id: string, name: string, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, isActive?: boolean | null, text: string } };

export type GetProjectByIdAdminQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type GetProjectByIdAdminQuery = { __typename?: 'Query', getProjectByIdAdmin?: { __typename?: 'Project', id: string, createdAt: any, name: string, slug: string, isActive?: boolean | null, description?: string | null, lat?: number | null, long?: number | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', filename: string, id: string } }> } | null };

export type UpdateProjectAdminMutationVariables = Exact<{
  updateProjectAdminInputs: UpdateProjectAdminInputsGql;
}>;


export type UpdateProjectAdminMutation = { __typename?: 'Mutation', updateProjectAdmin: { __typename?: 'Project', id: string, createdAt: any, name: string, slug: string, isActive?: boolean | null, description?: string | null, lat?: number | null, long?: number | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', filename: string, id: string } }> } };

export type AddImageToProjectAdminMutationVariables = Exact<{
  addImageToProjectAdminInputs: AddImageToProjectAdminInputsGql;
}>;


export type AddImageToProjectAdminMutation = { __typename?: 'Mutation', addImageToProjectAdmin: { __typename?: 'Project', id: string } };

export type UpdateProjectReviewAdminMutationVariables = Exact<{
  updateProjectReviewAdminInputs: UpdateProjectReviewAdminInputsGql;
}>;


export type UpdateProjectReviewAdminMutation = { __typename?: 'Mutation', updateProjectReviewAdmin: { __typename?: 'ProjectReview', id: string, createdAt: any, reviewer?: string | null, text?: string | null, projectId?: string | null, isActive?: boolean | null, project: { __typename?: 'Project', name: string, id: string }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> } };

export type GetProjectReviewByIdAdminQueryVariables = Exact<{
  projectReviewId: Scalars['String'];
}>;


export type GetProjectReviewByIdAdminQuery = { __typename?: 'Query', getProjectReviewByIdAdmin?: { __typename?: 'ProjectReview', id: string, createdAt: any, reviewer?: string | null, text?: string | null, projectId?: string | null, isActive?: boolean | null, project: { __typename?: 'Project', name: string, id: string }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> } | null };

export type GetProjectReviewsAdminQueryVariables = Exact<{
  getProjectReviewsAdminArgs: GetProjectReviewsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProjectReviewsAdminQuery = { __typename?: 'Query', getProjectReviewsAdmin: { __typename?: 'PaginatedProjectReview', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'ProjectReview', id: string, createdAt: any, reviewer?: string | null, text?: string | null, projectId?: string | null, project: { __typename?: 'Project', name: string, id: string }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> }> } };

export type DeleteProjectReviewAdminMutationVariables = Exact<{
  deleteProjectReviewAdmin: DeleteProjectReviewAdminInputsGql;
}>;


export type DeleteProjectReviewAdminMutation = { __typename?: 'Mutation', deleteProjectReviewAdmin: { __typename?: 'ProjectReview', id: string, isActive?: boolean | null } };

export type CreateProjectReviewAdminMutationVariables = Exact<{
  createProjectReviewAdminInputs: CreateProjectReviewAdminInputsGql;
}>;


export type CreateProjectReviewAdminMutation = { __typename?: 'Mutation', createProjectReviewAdmin: { __typename?: 'ProjectReview', id: string, createdAt: any, reviewer?: string | null, text?: string | null, project: { __typename?: 'Project', name: string, id: string }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', id: string, filename: string } }> } };

export type GetProjectsAdminQueryVariables = Exact<{
  getProjectsAdminArgs: GetProjectsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProjectsAdminQuery = { __typename?: 'Query', getProjectsAdmin: { __typename?: 'PaginatedProject', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Project', id: string, createdAt: any, name: string, slug: string, isActive?: boolean | null, description?: string | null, lat?: number | null, long?: number | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', filename: string, id: string } }> }> } };

export type UpdateProjectActivationAdminMutationVariables = Exact<{
  updateProjectActivationAdmin: UpdateProjectActivationAdminInputsGql;
}>;


export type UpdateProjectActivationAdminMutation = { __typename?: 'Mutation', updateProjectActivationAdmin: { __typename?: 'Project', id: string, isActive?: boolean | null } };

export type CreateProjectAdminMutationVariables = Exact<{
  createProjectAdminInputs: CreateProjectAdminInputsGql;
}>;


export type CreateProjectAdminMutation = { __typename?: 'Mutation', createProjectAdmin: { __typename?: 'Project', id: string, createdAt: any, name: string, slug: string, isActive?: boolean | null, description?: string | null, lat?: number | null, long?: number | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } }, fileUses: Array<{ __typename?: 'FileUse', id: string, file: { __typename?: 'File', filename: string, id: string } }> } };

export type GetPropertiesAdminQueryVariables = Exact<{
  getPropertiesAdminArgs: GetPropertiesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetPropertiesAdminQuery = { __typename?: 'Query', getPropertiesAdmin: { __typename?: 'PaginatedProperty', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null }> } };

export type UpdatePropertyActivationAdminMutationVariables = Exact<{
  updatePropertyActivationAdminInputs: UpdatePropertyActivationAdminInputsGql;
}>;


export type UpdatePropertyActivationAdminMutation = { __typename?: 'Mutation', updatePropertyActivationAdmin: { __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null } };

export type CreatePropertyAdminMutationVariables = Exact<{
  createPropertyAdminInputs: CreatePropertyAdminInputsGql;
}>;


export type CreatePropertyAdminMutation = { __typename?: 'Mutation', createPropertyAdmin: { __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null } };

export type UpdatePropertyAdminMutationVariables = Exact<{
  updatePropertyAdminInputs: UpdatePropertyAdminInputsGql;
}>;


export type UpdatePropertyAdminMutation = { __typename?: 'Mutation', updatePropertyAdmin: { __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null } };

export type GetPropertyByIdAdminQueryVariables = Exact<{
  propertyId: Scalars['String'];
}>;


export type GetPropertyByIdAdminQuery = { __typename?: 'Query', getPropertyByIdAdmin?: { __typename?: 'Property', id: string, name: string, unit: PropertyUnitEnum, isActive?: boolean | null } | null };

export type GetProvincesAdminQueryVariables = Exact<{
  getProvincesAdminArgs: GetProvincesAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetProvincesAdminQuery = { __typename?: 'Query', getProvincesAdmin: { __typename?: 'PaginatedProvince', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Province', id: string, name: string }> } };

export type CreateProvinceAdminMutationVariables = Exact<{
  createProvinceAdminInputs: CreateProvinceAdminInputsGql;
}>;


export type CreateProvinceAdminMutation = { __typename?: 'Mutation', createProvinceAdmin: { __typename?: 'Province', id: string, name: string } };

export type UpdateProvinceAdminMutationVariables = Exact<{
  updateProvinceAdminInputs: UpdateProvinceAdminInputsGql;
}>;


export type UpdateProvinceAdminMutation = { __typename?: 'Mutation', updateProvinceAdmin: { __typename?: 'Province', id: string, name: string } };

export type GetProvinceByIdAdminQueryVariables = Exact<{
  provinceId: Scalars['String'];
}>;


export type GetProvinceByIdAdminQuery = { __typename?: 'Query', getProvinceByIdAdmin?: { __typename?: 'Province', id: string, name: string } | null };

export type GetTransporterAgentsAdminQueryVariables = Exact<{
  getTransporterAgentsAdminArgs: GetTransporterAgentsAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetTransporterAgentsAdminQuery = { __typename?: 'Query', getTransporterAgentsAdmin: { __typename?: 'PaginatedTransporterAgent', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'TransporterAgent', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, description?: string | null, isActive?: boolean | null, transporter: { __typename?: 'Transporter', id: string, name: string, phone?: string | null, email?: string | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } }> } };

export type UpdateTransporterAgentActivationAdminMutationVariables = Exact<{
  updateTransporterAgentActivationAdmin: UpdateTransporterAgentActivationAdminInputsGql;
}>;


export type UpdateTransporterAgentActivationAdminMutation = { __typename?: 'Mutation', updateTransporterAgentActivationAdmin: { __typename?: 'TransporterAgent', id: string, isActive?: boolean | null } };

export type CreateTransporterAgentAdminMutationVariables = Exact<{
  createTransporterAgentAdminInputs: CreateTransporterAgentAdminInputsGql;
}>;


export type CreateTransporterAgentAdminMutation = { __typename?: 'Mutation', createTransporterAgentAdmin: { __typename?: 'TransporterAgent', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, description?: string | null, isActive?: boolean | null, transporter: { __typename?: 'Transporter', id: string, name: string, phone?: string | null, email?: string | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } } };

export type UpdateTransporterAgentAdminMutationVariables = Exact<{
  updateTransporterAgentAdminInputs: UpdateTransporterAgentAdminInputsGql;
}>;


export type UpdateTransporterAgentAdminMutation = { __typename?: 'Mutation', updateTransporterAgentAdmin: { __typename?: 'TransporterAgent', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, description?: string | null, isActive?: boolean | null, transporter: { __typename?: 'Transporter', id: string, name: string, phone?: string | null, email?: string | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } } };

export type GetTransporterAgentByIdAdminQueryVariables = Exact<{
  transporterAgentId: Scalars['String'];
}>;


export type GetTransporterAgentByIdAdminQuery = { __typename?: 'Query', getTransporterAgentByIdAdmin?: { __typename?: 'TransporterAgent', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, description?: string | null, isActive?: boolean | null, transporter: { __typename?: 'Transporter', id: string, name: string, phone?: string | null, email?: string | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', id: string, name: string } } } } | null };

export type GetTransportersAdminQueryVariables = Exact<{
  getTransportersAdminArgs: GetTransportersAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetTransportersAdminQuery = { __typename?: 'Query', getTransportersAdmin: { __typename?: 'PaginatedTransporter', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'Transporter', id: string, email?: string | null, name: string, description: string, address?: string | null, phone?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } }> } };

export type UpdateTransporterActivationAdminMutationVariables = Exact<{
  updateTransporterActivationAdmin: UpdateTransporterActivationAdminInputsGql;
}>;


export type UpdateTransporterActivationAdminMutation = { __typename?: 'Mutation', updateTransporterActivationAdmin: { __typename?: 'Transporter', id: string, isActive?: boolean | null } };

export type CreateTransporterAdminMutationVariables = Exact<{
  createTransporterAdminInputs: CreateTransporterAdminInputsGql;
}>;


export type CreateTransporterAdminMutation = { __typename?: 'Mutation', createTransporterAdmin: { __typename?: 'Transporter', id: string, name: string, phone?: string | null, email?: string | null, description: string, address?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } } };

export type UpdateTransporterAdminMutationVariables = Exact<{
  updateTransporterAdminInputs: UpdateTransporterAdminInputsGql;
}>;


export type UpdateTransporterAdminMutation = { __typename?: 'Mutation', updateTransporterAdmin: { __typename?: 'Transporter', id: string, name: string, phone?: string | null, email?: string | null, description: string, address?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } } };

export type GetTransporterByIdAdminQueryVariables = Exact<{
  transporterId: Scalars['String'];
}>;


export type GetTransporterByIdAdminQuery = { __typename?: 'Query', getTransporterByIdAdmin?: { __typename?: 'Transporter', id: string, name: string, phone?: string | null, email?: string | null, description: string, address?: string | null, isActive?: boolean | null, cityId?: string | null, city: { __typename?: 'City', id: string, name: string, province: { __typename?: 'Province', name: string, id: string } } } | null };

export type UpdateUserAdminMutationVariables = Exact<{
  updateUserAdminInputs: UpdateUserAdminInputsGql;
}>;


export type UpdateUserAdminMutation = { __typename?: 'Mutation', updateUserAdmin: { __typename?: 'User', id: string, createdAt: any, username: string, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, roles: Array<UserRoleEnum>, isActive?: boolean | null } };

export type UpdateUserProvincesAdminMutationVariables = Exact<{
  updateUserProvincesAdminInputs: UpdateUserProvincesAdminInputsGql;
}>;


export type UpdateUserProvincesAdminMutation = { __typename?: 'Mutation', updateUserProvincesAdmin: { __typename?: 'User', id: string, provinceUsers: Array<{ __typename?: 'ProvinceUser', id: string, provinceId: string, province: { __typename?: 'Province', id: string, name: string } }> } };

export type GetUserByIdAdminQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserByIdAdminQuery = { __typename?: 'Query', getUserByIdAdmin?: { __typename?: 'User', id: string, createdAt: any, updatedAt?: any | null, username: string, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, roles: Array<UserRoleEnum>, isActive?: boolean | null, provinceUsers: Array<{ __typename?: 'ProvinceUser', id: string, provinceId: string, province: { __typename?: 'Province', id: string, name: string } }> } | null };

export type GetUsersAdminQueryVariables = Exact<{
  getUsersAdminArgs: GetUsersAdminArgsGql;
  paginationArgs: PaginationArgsGql;
}>;


export type GetUsersAdminQuery = { __typename?: 'Query', getUsersAdmin: { __typename?: 'PaginatedUser', pageInfo: { __typename?: 'PageInfo', totalEdges: number, edgeCount?: number | null, edgesPerPage: number, currentPage: number, totalPages: number }, edges: Array<{ __typename?: 'User', id: string, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, username: string, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, roles: Array<UserRoleEnum>, isActive?: boolean | null }> } };

export type UpdateUserActivationAdminMutationVariables = Exact<{
  updateUserActivationAdmin: UpdateUserActivationAdminInputsGql;
}>;


export type UpdateUserActivationAdminMutation = { __typename?: 'Mutation', updateUserActivationAdmin: { __typename?: 'User', id: string, isActive?: boolean | null } };

export type CreateUserAdminMutationVariables = Exact<{
  createUserAdminInputs: CreateUserAdminInputsGql;
}>;


export type CreateUserAdminMutation = { __typename?: 'Mutation', createUserAdmin: { __typename?: 'User', id: string, createdAt: any, username: string, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, roles: Array<UserRoleEnum>, isActive?: boolean | null } };

export type LoginAdminQueryVariables = Exact<{
  loginAdminInputs: LoginAdminInputsGql;
}>;


export type LoginAdminQuery = { __typename?: 'Query', loginAdmin: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, createdAt: any, roles: Array<UserRoleEnum>, username: string } };

export type MeAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAdminQuery = { __typename?: 'Query', meAdmin?: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, createdAt: any, roles: Array<UserRoleEnum>, username: string } | null };


export const GetCitiesAdminAutoCompleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCitiesAdminAutoComplete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCitiesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCitiesAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCitiesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getCitiesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCitiesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCitiesAdminAutoCompleteQuery, GetCitiesAdminAutoCompleteQueryVariables>;
export const GetCategoriesAdminAutoCompleteMultiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategoriesAdminAutoCompleteMulti"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCategoriesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCategoriesAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategoriesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getCategoriesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCategoriesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesAdminAutoCompleteMultiQuery, GetCategoriesAdminAutoCompleteMultiQueryVariables>;
export const GetColorsAdminAutoCompleteMultiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getColorsAdminAutoCompleteMulti"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getColorsAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetColorsAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getColorsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getColorsAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getColorsAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"300"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetColorsAdminAutoCompleteMultiQuery, GetColorsAdminAutoCompleteMultiQueryVariables>;
export const GetCustomersAdminAutoCompleteMultiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCustomersAdminAutoCompleteMulti"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCustomersAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCustomersAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getCustomersAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCustomersAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"300"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomersAdminAutoCompleteMultiQuery, GetCustomersAdminAutoCompleteMultiQueryVariables>;
export const GetProvincesAdminAutoCompleteMultiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProvincesAdminAutoCompleteMulti"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProvincesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProvincesAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProvincesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProvincesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProvincesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"300"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProvincesAdminAutoCompleteMultiQuery, GetProvincesAdminAutoCompleteMultiQueryVariables>;
export const GetProducersAdminAutoCompleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProducersAdminAutoComplete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProducersAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProducersAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProducersAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProducersAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProducersAdminAutoCompleteQuery, GetProducersAdminAutoCompleteQueryVariables>;
export const GetPropertiesAdminAutoCompleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPropertiesAdminAutoComplete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getPropertiesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPropertiesAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPropertiesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getPropertiesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getPropertiesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]} as unknown as DocumentNode<GetPropertiesAdminAutoCompleteQuery, GetPropertiesAdminAutoCompleteQueryVariables>;
export const GetProvincesAdminAutoCompleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProvincesAdminAutoComplete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProvincesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProvincesAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProvincesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProvincesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProvincesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProvincesAdminAutoCompleteQuery, GetProvincesAdminAutoCompleteQueryVariables>;
export const GetTransportersAdminAutoCompleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTransportersAdminAutoComplete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getTransportersAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTransportersAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransportersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getTransportersAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getTransportersAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTransportersAdminAutoCompleteQuery, GetTransportersAdminAutoCompleteQueryVariables>;
export const GetUsersAdminAutoCompleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsersAdminAutoComplete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getUsersAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUsersAdminArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getUsersAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getUsersAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"300"}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersAdminAutoCompleteQuery, GetUsersAdminAutoCompleteQueryVariables>;
export const RemoveImageAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeImageAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeImageAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveImageAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeImageAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeImageAdmin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeImageAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]} as unknown as DocumentNode<RemoveImageAdminMutation, RemoveImageAdminMutationVariables>;
export const UploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>;
export const GetFileByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFileByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFileByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]} as unknown as DocumentNode<GetFileByIdAdminQuery, GetFileByIdAdminQueryVariables>;
export const LogoutAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"logoutAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LogoutAdminQuery, LogoutAdminQueryVariables>;
export const GetCategoriesAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategoriesAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCategoriesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCategoriesAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategoriesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getCategoriesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCategoriesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesAdminQuery, GetCategoriesAdminQueryVariables>;
export const UpdateCategoryActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCategoryActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCategoryActivationAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCategoryActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategoryActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCategoryActivationAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCategoryActivationAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateCategoryActivationAdminMutation, UpdateCategoryActivationAdminMutationVariables>;
export const CreateCategoryAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCategoryAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCategoryAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCategoryAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategoryAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCategoryAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCategoryAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<CreateCategoryAdminMutation, CreateCategoryAdminMutationVariables>;
export const UpdateCategoryAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCategoryAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCategoryAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCategoryAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategoryAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCategoryAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCategoryAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateCategoryAdminMutation, UpdateCategoryAdminMutationVariables>;
export const GetCategoryByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategoryByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategoryByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<GetCategoryByIdAdminQuery, GetCategoryByIdAdminQueryVariables>;
export const GetCitiesAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCitiesAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCitiesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCitiesAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCitiesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getCitiesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCitiesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCitiesAdminQuery, GetCitiesAdminQueryVariables>;
export const CreateCityAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCityAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCityAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCityAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCityAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCityAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCityAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCityAdminMutation, CreateCityAdminMutationVariables>;
export const UpdateCityAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCityAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCityAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCityAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCityAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCityAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCityAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCityAdminMutation, UpdateCityAdminMutationVariables>;
export const GetCityByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCityByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCityByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetCityByIdAdminQuery, GetCityByIdAdminQueryVariables>;
export const GetCustomersAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCustomersAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCustomersAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCustomersAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getCustomersAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCustomersAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"officePhone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomersAdminQuery, GetCustomersAdminQueryVariables>;
export const UpdateCustomerActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCustomerActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCustomerActivationAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCustomerActivationAdmin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCustomerActivationAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerActivationAdminMutation, UpdateCustomerActivationAdminMutationVariables>;
export const CreateCustomerAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCustomerAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCustomerAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomerAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCustomerAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCustomerAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"officePhone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerAdminMutation, CreateCustomerAdminMutationVariables>;
export const UpdateCustomerAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCustomerAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCustomerAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCustomerAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCustomerAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"officePhone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerAdminMutation, UpdateCustomerAdminMutationVariables>;
export const GetCustomerByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCustomerByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomerByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"officePhone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomerByIdAdminQuery, GetCustomerByIdAdminQueryVariables>;
export const GetMessagesAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMessagesAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getMessagesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMessagesAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMessagesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getMessagesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getMessagesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isSubmited"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"officePhone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMessagesAdminQuery, GetMessagesAdminQueryVariables>;
export const UpdateMessageActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMessageActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateMessageActivationAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMessageActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMessageActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateMessageActivationAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateMessageActivationAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateMessageActivationAdminMutation, UpdateMessageActivationAdminMutationVariables>;
export const CreateMessageAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createMessageAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createMessageAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMessageAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessageAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createMessageAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createMessageAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isSubmited"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"officePhone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateMessageAdminMutation, CreateMessageAdminMutationVariables>;
export const UpdateMessageAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMessageAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateMessageAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMessageAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMessageAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateMessageAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateMessageAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isSubmited"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"officePhone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMessageAdminMutation, UpdateMessageAdminMutationVariables>;
export const GetMessageByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMessageByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMessageByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"messageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isSubmited"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"officePhone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMessageByIdAdminQuery, GetMessageByIdAdminQueryVariables>;
export const GetProducerAgentsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProducerAgentsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProducerAgentsAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProducerAgentsAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducerAgentsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProducerAgentsAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProducerAgentsAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"producer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProducerAgentsAdminQuery, GetProducerAgentsAdminQueryVariables>;
export const UpdateProducerAgentActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProducerAgentActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProducerAgentActivationAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProducerAgentActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProducerAgentActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProducerAgentActivationAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProducerAgentActivationAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateProducerAgentActivationAdminMutation, UpdateProducerAgentActivationAdminMutationVariables>;
export const CreateProducerAgentAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProducerAgentAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProducerAgentAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProducerAgentAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProducerAgentAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProducerAgentAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProducerAgentAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"producer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProducerAgentAdminMutation, CreateProducerAgentAdminMutationVariables>;
export const UpdateProducerAgentAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProducerAgentAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProducerAgentAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProducerAgentAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProducerAgentAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProducerAgentAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProducerAgentAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"producer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProducerAgentAdminMutation, UpdateProducerAgentAdminMutationVariables>;
export const GetProducerAgentByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProducerAgentByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"producerAgentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducerAgentByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"producerAgentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"producerAgentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"producer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProducerAgentByIdAdminQuery, GetProducerAgentByIdAdminQueryVariables>;
export const GetProducersAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProducersAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProducersAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProducersAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProducersAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProducersAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProducersAdminQuery, GetProducersAdminQueryVariables>;
export const UpdateProducerActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProducerActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProducerActivationAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProducerActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProducerActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProducerActivationAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProducerActivationAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateProducerActivationAdminMutation, UpdateProducerActivationAdminMutationVariables>;
export const CreateProducerAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProducerAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProducerAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProducerAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProducerAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProducerAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProducerAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProducerAdminMutation, CreateProducerAdminMutationVariables>;
export const UpdateProducerAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProducerAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProducerAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProducerAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProducerAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProducerAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProducerAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProducerAdminMutation, UpdateProducerAdminMutationVariables>;
export const GetProducerByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProducerByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"producerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducerByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"producerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"producerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProducerByIdAdminQuery, GetProducerByIdAdminQueryVariables>;
export const GetProductByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"productColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"colorId"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductByIdAdminQuery, GetProductByIdAdminQueryVariables>;
export const AddCategoriesToProductAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addCategoriesToProductAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addCategoriesToProductAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCategoriesToProductAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCategoriesToProductAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addCategoriesToProductAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addCategoriesToProductAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"productCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddCategoriesToProductAdminMutation, AddCategoriesToProductAdminMutationVariables>;
export const AddColorsToProductAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addColorsToProductAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addColorsToProductAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddColorsToProductAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addColorsToProductAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addColorsToProductAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addColorsToProductAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"productColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"colorId"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddColorsToProductAdminMutation, AddColorsToProductAdminMutationVariables>;
export const UpdateProductAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProductAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProductAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProductAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<UpdateProductAdminMutation, UpdateProductAdminMutationVariables>;
export const AddImageToProductAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addImageToProductAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addImageToProductAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddImageToProductAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addImageToProductAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addImageToProductAdmin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addImageToProductAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddImageToProductAdminMutation, AddImageToProductAdminMutationVariables>;
export const UpdatePropertyOfProductAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePropertyOfProductAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePropertyOfProductAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePropertyOfProductAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePropertyOfProductAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePropertyOfProductAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePropertyOfProductAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePropertyOfProductAdminMutation, UpdatePropertyOfProductAdminMutationVariables>;
export const GetProductPropertyByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductPropertyByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productPropertyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductPropertyByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productPropertyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productPropertyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductPropertyByIdAdminQuery, GetProductPropertyByIdAdminQueryVariables>;
export const GetProductPropertiesAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductPropertiesAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProductPropertiesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductPropertiesAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductPropertiesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProductPropertiesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProductPropertiesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductPropertiesAdminQuery, GetProductPropertiesAdminQueryVariables>;
export const RemovePropertyFromProductAdminInputsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removePropertyFromProductAdminInputs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removePropertyFromProductAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemovePropertyFromProductAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePropertyFromProductAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removePropertyFromProductAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removePropertyFromProductAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<RemovePropertyFromProductAdminInputsMutation, RemovePropertyFromProductAdminInputsMutationVariables>;
export const AddPropertyToProductAdminInputsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPropertyToProductAdminInputs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addPropertyToProductAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddPropertyToProductAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPropertyToProductAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addPropertyToProductAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addPropertyToProductAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<AddPropertyToProductAdminInputsMutation, AddPropertyToProductAdminInputsMutationVariables>;
export const UpdateProductReviewAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductReviewAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProductReviewAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductReviewAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductReviewAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProductReviewAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProductReviewAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProductReviewAdminMutation, UpdateProductReviewAdminMutationVariables>;
export const GetProductReviewByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductReviewByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productReviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductReviewByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productReviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productReviewId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductReviewByIdAdminQuery, GetProductReviewByIdAdminQueryVariables>;
export const GetProductReviewsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductReviewsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProductReviewsAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductReviewsAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductReviewsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProductReviewsAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProductReviewsAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductReviewsAdminQuery, GetProductReviewsAdminQueryVariables>;
export const DeleteProductReviewAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProductReviewAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductReviewAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteProductReviewAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProductReviewAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteProductReviewAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductReviewAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<DeleteProductReviewAdminMutation, DeleteProductReviewAdminMutationVariables>;
export const CreateProductReviewAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProductReviewAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProductReviewAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductReviewAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProductReviewAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProductReviewAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProductReviewAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProductReviewAdminMutation, CreateProductReviewAdminMutationVariables>;
export const GetProductsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProductsAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductsAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProductsAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProductsAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"productProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsAdminQuery, GetProductsAdminQueryVariables>;
export const UpdateProductActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProductActivationAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProductActivationAdmin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProductActivationAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateProductActivationAdminMutation, UpdateProductActivationAdminMutationVariables>;
export const CreateProductAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProductAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProductAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProductAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProductAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProductAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<CreateProductAdminMutation, CreateProductAdminMutationVariables>;
export const GetProjectByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"long"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectByIdAdminQuery, GetProjectByIdAdminQueryVariables>;
export const UpdateProjectAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProjectAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProjectAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjectAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProjectAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"long"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectAdminMutation, UpdateProjectAdminMutationVariables>;
export const AddImageToProjectAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addImageToProjectAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addImageToProjectAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddImageToProjectAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addImageToProjectAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addImageToProjectAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addImageToProjectAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddImageToProjectAdminMutation, AddImageToProjectAdminMutationVariables>;
export const UpdateProjectReviewAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProjectReviewAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReviewAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProjectReviewAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjectReviewAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProjectReviewAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectReviewAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectReviewAdminMutation, UpdateProjectReviewAdminMutationVariables>;
export const GetProjectReviewByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectReviewByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectReviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectReviewByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectReviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectReviewId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectReviewByIdAdminQuery, GetProjectReviewByIdAdminQueryVariables>;
export const GetProjectReviewsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectReviewsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProjectReviewsAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProjectReviewsAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectReviewsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProjectReviewsAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProjectReviewsAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectReviewsAdminQuery, GetProjectReviewsAdminQueryVariables>;
export const DeleteProjectReviewAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProjectReviewAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReviewAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteProjectReviewAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProjectReviewAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteProjectReviewAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProjectReviewAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<DeleteProjectReviewAdminMutation, DeleteProjectReviewAdminMutationVariables>;
export const CreateProjectReviewAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProjectReviewAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProjectReviewAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectReviewAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProjectReviewAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProjectReviewAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProjectReviewAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectReviewAdminMutation, CreateProjectReviewAdminMutationVariables>;
export const GetProjectsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProjectsAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProjectsAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProjectsAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProjectsAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"long"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsAdminQuery, GetProjectsAdminQueryVariables>;
export const UpdateProjectActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProjectActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectActivationAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProjectActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjectActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProjectActivationAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProjectActivationAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateProjectActivationAdminMutation, UpdateProjectActivationAdminMutationVariables>;
export const CreateProjectAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProjectAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProjectAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProjectAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProjectAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProjectAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"long"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectAdminMutation, CreateProjectAdminMutationVariables>;
export const GetPropertiesAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPropertiesAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getPropertiesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPropertiesAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPropertiesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getPropertiesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getPropertiesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]} as unknown as DocumentNode<GetPropertiesAdminQuery, GetPropertiesAdminQueryVariables>;
export const UpdatePropertyActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePropertyActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePropertyActivationAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePropertyActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePropertyActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePropertyActivationAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePropertyActivationAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdatePropertyActivationAdminMutation, UpdatePropertyActivationAdminMutationVariables>;
export const CreatePropertyAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPropertyAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPropertyAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePropertyAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPropertyAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPropertyAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPropertyAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<CreatePropertyAdminMutation, CreatePropertyAdminMutationVariables>;
export const UpdatePropertyAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePropertyAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePropertyAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePropertyAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePropertyAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePropertyAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePropertyAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdatePropertyAdminMutation, UpdatePropertyAdminMutationVariables>;
export const GetPropertyByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPropertyByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"propertyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPropertyByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"propertyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"propertyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<GetPropertyByIdAdminQuery, GetPropertyByIdAdminQueryVariables>;
export const GetProvincesAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProvincesAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProvincesAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProvincesAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProvincesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProvincesAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProvincesAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProvincesAdminQuery, GetProvincesAdminQueryVariables>;
export const CreateProvinceAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProvinceAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProvinceAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProvinceAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProvinceAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProvinceAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProvinceAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateProvinceAdminMutation, CreateProvinceAdminMutationVariables>;
export const UpdateProvinceAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProvinceAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProvinceAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProvinceAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProvinceAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProvinceAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProvinceAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateProvinceAdminMutation, UpdateProvinceAdminMutationVariables>;
export const GetProvinceByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProvinceByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"provinceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProvinceByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"provinceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"provinceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetProvinceByIdAdminQuery, GetProvinceByIdAdminQueryVariables>;
export const GetTransporterAgentsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTransporterAgentsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getTransporterAgentsAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTransporterAgentsAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransporterAgentsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getTransporterAgentsAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getTransporterAgentsAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"transporter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTransporterAgentsAdminQuery, GetTransporterAgentsAdminQueryVariables>;
export const UpdateTransporterAgentActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTransporterAgentActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTransporterAgentActivationAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTransporterAgentActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTransporterAgentActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTransporterAgentActivationAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTransporterAgentActivationAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateTransporterAgentActivationAdminMutation, UpdateTransporterAgentActivationAdminMutationVariables>;
export const CreateTransporterAgentAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTransporterAgentAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTransporterAgentAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTransporterAgentAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTransporterAgentAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTransporterAgentAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTransporterAgentAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"transporter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateTransporterAgentAdminMutation, CreateTransporterAgentAdminMutationVariables>;
export const UpdateTransporterAgentAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTransporterAgentAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTransporterAgentAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTransporterAgentAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTransporterAgentAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTransporterAgentAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTransporterAgentAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"transporter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTransporterAgentAdminMutation, UpdateTransporterAgentAdminMutationVariables>;
export const GetTransporterAgentByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTransporterAgentByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transporterAgentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransporterAgentByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transporterAgentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transporterAgentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"transporter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTransporterAgentByIdAdminQuery, GetTransporterAgentByIdAdminQueryVariables>;
export const GetTransportersAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTransportersAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getTransportersAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTransportersAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransportersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getTransportersAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getTransportersAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTransportersAdminQuery, GetTransportersAdminQueryVariables>;
export const UpdateTransporterActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTransporterActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTransporterActivationAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTransporterActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTransporterActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTransporterActivationAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTransporterActivationAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateTransporterActivationAdminMutation, UpdateTransporterActivationAdminMutationVariables>;
export const CreateTransporterAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTransporterAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTransporterAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTransporterAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTransporterAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTransporterAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTransporterAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateTransporterAdminMutation, CreateTransporterAdminMutationVariables>;
export const UpdateTransporterAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTransporterAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTransporterAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTransporterAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTransporterAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTransporterAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTransporterAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTransporterAdminMutation, UpdateTransporterAdminMutationVariables>;
export const GetTransporterByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTransporterByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transporterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransporterByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transporterId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transporterId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTransporterByIdAdminQuery, GetTransporterByIdAdminQueryVariables>;
export const UpdateUserAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateUserAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateUserAdminMutation, UpdateUserAdminMutationVariables>;
export const UpdateUserProvincesAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserProvincesAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserProvincesAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserProvincesAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserProvincesAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateUserProvincesAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserProvincesAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provinceUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserProvincesAdminMutation, UpdateUserProvincesAdminMutationVariables>;
export const GetUserByIdAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserByIdAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserByIdAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"provinceUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"province"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserByIdAdminQuery, GetUserByIdAdminQueryVariables>;
export const GetUsersAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsersAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getUsersAdminArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUsersAdminArgsGQL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArgsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getUsersAdminArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getUsersAdminArgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEdges"}},{"kind":"Field","name":{"kind":"Name","value":"edgeCount"}},{"kind":"Field","name":{"kind":"Name","value":"edgesPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersAdminQuery, GetUsersAdminQueryVariables>;
export const UpdateUserActivationAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserActivationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserActivationAdmin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserActivationAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserActivationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateUserActivationAdmin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserActivationAdmin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<UpdateUserActivationAdminMutation, UpdateUserActivationAdminMutationVariables>;
export const CreateUserAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUserAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<CreateUserAdminMutation, CreateUserAdminMutationVariables>;
export const LoginAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loginAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<LoginAdminQuery, LoginAdminQueryVariables>;
export const MeAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"meAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<MeAdminQuery, MeAdminQueryVariables>;