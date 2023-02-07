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
  categories: Array<Scalars['String']>;
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
  cityId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  officePhone: Scalars['String'];
  phone: Scalars['String'];
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
  cityId: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type CreateProducerAgentAdminInputsGql = {
  description: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  producerId: Scalars['String'];
};

export type CreateProductAdminInputsGql = {
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  slug: Scalars['String'];
  text: Scalars['String'];
};

export type CreateProductReviewAdminInputsGql = {
  fileId: Scalars['String'];
  isActive: Scalars['Boolean'];
  productId: Scalars['String'];
  reviewer: Scalars['String'];
  text: Scalars['String'];
};

export type CreateProjectAdminInputsGql = {
  cityId: Scalars['String'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  lat: Scalars['Float'];
  long: Scalars['Float'];
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
  cityId: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type CreateTransporterAgentAdminInputsGql = {
  description: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
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
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategoriesToProductAdmin: Product;
  addColorsToProductAdmin: Color;
  addImageToProducerAdmin: Producer;
  addImageToProductAdmin: Product;
  addImageToProjectAdmin: Project;
  addImageToTransporterAdmin: Transporter;
  addPropertyToProductAdmin: Product;
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
  updatePropertyOfProductAdmin: Product;
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
  addCategoriesToProductAdmin: AddCategoriesToProductAdminInputsGql;
};


export type MutationAddColorsToProductAdminArgs = {
  addColorsToProductAdmin: AddColorsToProductAdminInputsGql;
};


export type MutationAddImageToProducerAdminArgs = {
  addImageToProducerAdmin: AddImageToProducerAdminInputsGql;
};


export type MutationAddImageToProductAdminArgs = {
  addImageToProductAdmin: AddImageToProductAdminInputsGql;
};


export type MutationAddImageToProjectAdminArgs = {
  addImageToProjectAdmin: AddImageToProjectAdminInputsGql;
};


export type MutationAddImageToTransporterAdminArgs = {
  addImageToTransporterAdmin: AddImageToTransporterAdminInputsGql;
};


export type MutationAddPropertyToProductAdminArgs = {
  addPropertyToProductAdmin: AddPropertyToProductAdminInputsGql;
};


export type MutationCreateCategoryAdminArgs = {
  createCategoryAdmin: CreateCategoryAdminInputsGql;
};


export type MutationCreateCityAdminArgs = {
  createCityAdmin: CreateCityAdminInputsGql;
};


export type MutationCreateColorAdminArgs = {
  createColorAdmin: CreateColorAdminInputsGql;
};


export type MutationCreateCustomerAdminArgs = {
  createCustomerAdmin: CreateCustomerAdminInputsGql;
};


export type MutationCreateCustomerMessageAdminArgs = {
  createCustomerMessageAdmin: CreateCustomerMessageAdminInputsGql;
};


export type MutationCreateMessageAdminArgs = {
  createMessageAdmin: CreateMessageAdminInputsGql;
};


export type MutationCreateProducerAdminArgs = {
  createProducerAdmin: CreateProducerAdminInputsGql;
};


export type MutationCreateProducerAgentAdminArgs = {
  createProducerAgentAdmin: CreateProducerAgentAdminInputsGql;
};


export type MutationCreateProductAdminArgs = {
  createProductAdmin: CreateProductAdminInputsGql;
};


export type MutationCreateProductReviewAdminArgs = {
  createProductReviewAdmin: CreateProductReviewAdminInputsGql;
};


export type MutationCreateProjectAdminArgs = {
  createProjectAdmin: CreateProjectAdminInputsGql;
};


export type MutationCreateProjectReviewAdminArgs = {
  createProjectReviewAdmin: CreateProjectReviewAdminInputsGql;
};


export type MutationCreatePropertyAdminArgs = {
  createPropertyAdmin: CreatePropertyAdminInputsGql;
};


export type MutationCreateProvinceAdminArgs = {
  createProvinceAdmin: CreateProvinceAdminInputsGql;
};


export type MutationCreateTransporterAdminArgs = {
  createTransporterAdmin: CreateTransporterAdminInputsGql;
};


export type MutationCreateTransporterAgentAdminArgs = {
  createTransporterAgentAdmin: CreateTransporterAgentAdminInputsGql;
};


export type MutationCreateUserAdminArgs = {
  createUserAdmin: CreateUserAdminInputsGql;
};


export type MutationDeleteCategoryAdminArgs = {
  deleteCategoryAdmin: DeleteCategoryAdminInputsGql;
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
  deleteMessageAdmin: DeleteMessageAdminInputsGql;
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
  deleteProductReviewAdmin: DeleteProductReviewAdminInputsGql;
};


export type MutationDeleteProjectAdminArgs = {
  deleteProjectAdmin: DeleteProjectAdminInputsGql;
};


export type MutationDeleteProjectReviewAdminArgs = {
  deleteProjectReviewAdmin: DeleteProjectReviewAdminInputsGql;
};


export type MutationDeletePropertyAdminArgs = {
  deletePropertyAdmin: DeletePropertyAdminInputsGql;
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
  removePropertyFromProductAdmin: RemovePropertyFromProductAdminInputsGql;
};


export type MutationUpdateCategoryActivationAdminArgs = {
  updateCategoryActivationAdmin: UpdateCategoryActivationAdminInputsGql;
};


export type MutationUpdateCategoryAdminArgs = {
  updateCategoryAdmin: UpdateCategoryAdminInputsGql;
};


export type MutationUpdateCityAdminArgs = {
  updateCityAdmin: UpdateCityAdminInputsGql;
};


export type MutationUpdateColorAdminArgs = {
  updateColorAdmin: UpdateColorAdminInputsGql;
};


export type MutationUpdateCustomerActivationAdminArgs = {
  updateCustomerActivationAdmin: UpdateCustomerActivationAdminInputsGql;
};


export type MutationUpdateCustomerAdminArgs = {
  updateCustomerAdmin: UpdateCustomerAdminInputsGql;
};


export type MutationUpdateMessageActivationAdminArgs = {
  updateMessageActivationAdmin: UpdateMessageActivationAdminInputsGql;
};


export type MutationUpdateMessageAdminArgs = {
  updateMessageAdmin: UpdateMessageAdminInputsGql;
};


export type MutationUpdateProducerActivationAdminArgs = {
  updateProducerActivationAdmin: UpdateProducerActivationAdminInputsGql;
};


export type MutationUpdateProducerAdminArgs = {
  updateProducerAdmin: UpdateProducerAdminInputsGql;
};


export type MutationUpdateProducerAgentActivationAdminArgs = {
  updateProducerAgentActivationAdmin: UpdateProducerAgentActivationAdminInputsGql;
};


export type MutationUpdateProducerAgentAdminArgs = {
  updateProducerAgentAdmin: UpdateProducerAgentAdminInputsGql;
};


export type MutationUpdateProductActivationAdminArgs = {
  updateProductActivationAdmin: UpdateProductActivationAdminInputsGql;
};


export type MutationUpdateProductAdminArgs = {
  updateProductAdmin: UpdateProductAdminInputsGql;
};


export type MutationUpdateProductReviewAdminArgs = {
  updateProductReviewAdmin: UpdateProductReviewAdminInputsGql;
};


export type MutationUpdateProjectActivationAdminArgs = {
  updateProjectActivationAdmin: UpdateProjectActivationAdminInputsGql;
};


export type MutationUpdateProjectAdminArgs = {
  updateProjectAdmin: UpdateProjectAdminInputsGql;
};


export type MutationUpdateProjectReviewAdminArgs = {
  updateProjectReviewAdmin: UpdateProjectReviewAdminInputsGql;
};


export type MutationUpdatePropertyActivationAdminArgs = {
  updatePropertyActivationAdmin: UpdatePropertyActivationAdminInputsGql;
};


export type MutationUpdatePropertyAdminArgs = {
  updatePropertyAdmin: UpdatePropertyAdminInputsGql;
};


export type MutationUpdatePropertyOfProductAdminArgs = {
  updatePropertyOfProductAdmin: UpdatePropertyOfProductAdminInputsGql;
};


export type MutationUpdateProvinceAdminArgs = {
  updateProvinceAdmin: UpdateProvinceAdminInputsGql;
};


export type MutationUpdateTransporterActivationAdminArgs = {
  updateTransporterActivationAdmin: UpdateTransporterActivationAdminInputsGql;
};


export type MutationUpdateTransporterAdminArgs = {
  updateTransporterAdmin: UpdateTransporterAdminInputsGql;
};


export type MutationUpdateTransporterAgentActivationAdminArgs = {
  updateTransporterAgentActivationAdmin: UpdateTransporterAgentActivationAdminInputsGql;
};


export type MutationUpdateTransporterAgentAdminArgs = {
  updateTransporterAgentAdmin: UpdateTransporterAgentAdminInputsGql;
};


export type MutationUpdateUserActivationAdminArgs = {
  updateUserActivationAdmin: UpdateUserActivationAdminInputsGql;
};


export type MutationUpdateUserAdminArgs = {
  updateUserAdmin: UpdateUserAdminInputsGql;
};


export type MutationUpdateUserProvincesAdminArgs = {
  updateUserProvincesAdmin: UpdateUserProvincesAdminInputsGql;
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
  edges?: Maybe<Array<Category>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedCity = {
  __typename?: 'PaginatedCity';
  edges?: Maybe<Array<City>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedColor = {
  __typename?: 'PaginatedColor';
  edges?: Maybe<Array<Color>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedCustomer = {
  __typename?: 'PaginatedCustomer';
  edges?: Maybe<Array<Customer>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedMessage = {
  __typename?: 'PaginatedMessage';
  edges?: Maybe<Array<Message>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedProducer = {
  __typename?: 'PaginatedProducer';
  edges?: Maybe<Array<Producer>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedProducerAgent = {
  __typename?: 'PaginatedProducerAgent';
  edges?: Maybe<Array<ProducerAgent>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedProduct = {
  __typename?: 'PaginatedProduct';
  edges?: Maybe<Array<Product>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedProductReview = {
  __typename?: 'PaginatedProductReview';
  edges?: Maybe<Array<ProductReview>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedProject = {
  __typename?: 'PaginatedProject';
  edges?: Maybe<Array<Project>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedProjectReview = {
  __typename?: 'PaginatedProjectReview';
  edges?: Maybe<Array<ProjectReview>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedProperty = {
  __typename?: 'PaginatedProperty';
  edges?: Maybe<Array<Property>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedProvince = {
  __typename?: 'PaginatedProvince';
  edges?: Maybe<Array<Province>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedTransporter = {
  __typename?: 'PaginatedTransporter';
  edges?: Maybe<Array<Transporter>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedTransporterAgent = {
  __typename?: 'PaginatedTransporterAgent';
  edges?: Maybe<Array<TransporterAgent>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PaginatedUser = {
  __typename?: 'PaginatedUser';
  edges?: Maybe<Array<User>>;
  pageInfo?: Maybe<PageInfo>;
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
  productCategories: Array<ProductCategory>;
  productColors: Array<ProductColor>;
  productProperties: Array<ProductProperty>;
  productReviews: Array<ProductReview>;
  slug: Scalars['String'];
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
  getCategoriesAdmin?: Maybe<PaginatedCategory>;
  getCategoryByIdAdmin?: Maybe<Category>;
  getCitiesAdmin?: Maybe<PaginatedCity>;
  getCityByIdAdmin?: Maybe<City>;
  getColorByIdAdmin?: Maybe<Color>;
  getColorsAdmin?: Maybe<PaginatedColor>;
  getCustomerByIdAdmin?: Maybe<Customer>;
  getCustomersAdmin?: Maybe<PaginatedCustomer>;
  getMessageByIdAdmin?: Maybe<Message>;
  getMessagesAdmin?: Maybe<PaginatedMessage>;
  getProducerAgentByIdAdmin?: Maybe<ProducerAgent>;
  getProducerAgentsAdmin?: Maybe<PaginatedProducerAgent>;
  getProducerByIdAdmin?: Maybe<Producer>;
  getProducersAdmin?: Maybe<PaginatedProducer>;
  getProductByIdAdmin?: Maybe<Product>;
  getProductReviewByIdAdmin?: Maybe<ProductReview>;
  getProductReviewsAdmin?: Maybe<PaginatedProductReview>;
  getProductsAdmin?: Maybe<PaginatedProduct>;
  getProjectByIdAdmin?: Maybe<Project>;
  getProjectReviewByIdAdmin?: Maybe<ProjectReview>;
  getProjectReviewsAdmin?: Maybe<PaginatedProjectReview>;
  getProjectsAdmin?: Maybe<PaginatedProject>;
  getPropertiesAdmin?: Maybe<PaginatedProperty>;
  getPropertyByIdAdmin?: Maybe<Property>;
  getProvinceByIdAdmin?: Maybe<Province>;
  getProvincesAdmin?: Maybe<PaginatedProvince>;
  getTransporterAgentByIdAdmin?: Maybe<TransporterAgent>;
  getTransporterAgentsAdmin?: Maybe<PaginatedTransporterAgent>;
  getTransporterByIdAdmin?: Maybe<Transporter>;
  getTransportersAdmin?: Maybe<PaginatedTransporter>;
  getUserByIdAdmin?: Maybe<User>;
  getUsersAdmin?: Maybe<PaginatedUser>;
  loginAdmin: User;
  logoutAdmin?: Maybe<User>;
  meAdmin?: Maybe<User>;
};


export type QueryGetCategoriesAdminArgs = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCategoryByIdAdminArgs = {
  categoryId: Scalars['String'];
};


export type QueryGetCitiesAdminArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  provinceId?: InputMaybe<Scalars['String']>;
};


export type QueryGetCityByIdAdminArgs = {
  cityId: Scalars['String'];
};


export type QueryGetColorByIdAdminArgs = {
  colorId: Scalars['String'];
};


export type QueryGetColorsAdminArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['String']>;
};


export type QueryGetCustomerByIdAdminArgs = {
  customerId: Scalars['String'];
};


export type QueryGetCustomersAdminArgs = {
  cityIds?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  provinceIds?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetMessageByIdAdminArgs = {
  messageId: Scalars['String'];
};


export type QueryGetMessagesAdminArgs = {
  customerId?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryGetProducerAgentByIdAdminArgs = {
  producerAgentId: Scalars['String'];
};


export type QueryGetProducerAgentsAdminArgs = {
  isActive?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  producerId?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetProducerByIdAdminArgs = {
  producerId: Scalars['String'];
};


export type QueryGetProducersAdminArgs = {
  cityIds?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  provinceIds?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetProductByIdAdminArgs = {
  productId: Scalars['String'];
};


export type QueryGetProductReviewByIdAdminArgs = {
  productReviewId: Scalars['String'];
};


export type QueryGetProductReviewsAdminArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  reviewer?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryGetProductsAdminArgs = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetProjectByIdAdminArgs = {
  projectId: Scalars['String'];
};


export type QueryGetProjectReviewByIdAdminArgs = {
  projectReviewId: Scalars['String'];
};


export type QueryGetProjectReviewsAdminArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['String']>;
  reviewer?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};


export type QueryGetProjectsAdminArgs = {
  cityIds?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  provinceIds?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetPropertiesAdminArgs = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  units?: InputMaybe<Array<PropertyUnitEnum>>;
};


export type QueryGetPropertyByIdAdminArgs = {
  propertyId: Scalars['String'];
};


export type QueryGetProvinceByIdAdminArgs = {
  provinceId: Scalars['String'];
};


export type QueryGetProvincesAdminArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetTransporterAgentByIdAdminArgs = {
  transporterAgentId: Scalars['String'];
};


export type QueryGetTransporterAgentsAdminArgs = {
  isActive?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  transporterId?: InputMaybe<Scalars['String']>;
};


export type QueryGetTransporterByIdAdminArgs = {
  transporterId: Scalars['String'];
};


export type QueryGetTransportersAdminArgs = {
  cityIds?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  provinceIds?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetUserByIdAdminArgs = {
  userId: Scalars['String'];
};


export type QueryGetUsersAdminArgs = {
  email?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<UserRoleEnum>>;
};


export type QueryLoginAdminArgs = {
  loginAdminInputs: LoginAdminInputsGql;
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
  isActive: Scalars['Boolean'];
  producerId: Scalars['String'];
};

export type UpdateCustomerAdminInputsGql = {
  cityId: Scalars['String'];
  customerId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  officePhone: Scalars['String'];
  phone: Scalars['String'];
};

export type UpdateMessageActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  messageId: Scalars['String'];
};

export type UpdateMessageAdminInputsGql = {
  customerMessagesIds: Array<Scalars['String']>;
  isActive: Scalars['Boolean'];
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type UpdateProducerActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  producerId: Scalars['String'];
};

export type UpdateProducerAdminInputsGql = {
  address: Scalars['String'];
  cityId: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  phone: Scalars['String'];
  producerId: Scalars['String'];
};

export type UpdateProducerAgentActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  producerAgentId: Scalars['String'];
};

export type UpdateProducerAgentAdminInputsGql = {
  description: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
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
  text: Scalars['String'];
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
  cityId: Scalars['String'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  lat: Scalars['Float'];
  long: Scalars['Float'];
  name: Scalars['String'];
  projectId: Scalars['String'];
  slug: Scalars['String'];
};

export type UpdateProjectReviewAdminInputsGql = {
  fileId?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  projectId?: InputMaybe<Scalars['String']>;
  projectReviewId?: InputMaybe<Scalars['String']>;
  reviewer?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
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
  cityId: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  phone: Scalars['String'];
  transporterId: Scalars['String'];
};

export type UpdateTransporterAgentActivationAdminInputsGql = {
  isActive: Scalars['Boolean'];
  transporterAgentId: Scalars['String'];
};

export type UpdateTransporterAgentAdminInputsGql = {
  description: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
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

export type LogoutAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutAdminQuery = { __typename?: 'Query', logoutAdmin?: { __typename?: 'User', id: string } | null };

export type LoginAdminQueryVariables = Exact<{
  loginAdminInputs: LoginAdminInputsGql;
}>;


export type LoginAdminQuery = { __typename?: 'Query', loginAdmin: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, createdAt: any, roles: Array<UserRoleEnum>, username: string } };

export type MeAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAdminQuery = { __typename?: 'Query', meAdmin?: { __typename?: 'User', id: string, lastName?: string | null, firstName?: string | null, createdAt: any, roles: Array<UserRoleEnum>, username: string } | null };


export const LogoutAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"logoutAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LogoutAdminQuery, LogoutAdminQueryVariables>;
export const LoginAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loginAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginAdminInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginAdminInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginAdminInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginAdminInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<LoginAdminQuery, LoginAdminQueryVariables>;
export const MeAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"meAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<MeAdminQuery, MeAdminQueryVariables>;