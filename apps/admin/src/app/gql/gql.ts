/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation removeImageAdmin($removeImageAdmin: RemoveImageAdminInputsGQL!) {\n    removeImageAdmin(removeImageAdmin: $removeImageAdmin) {\n      id\n      filename\n    }\n  }\n": types.RemoveImageAdminDocument,
    "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      id\n      path\n      filename\n    }\n  }\n": types.UploadFileDocument,
    "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n": types.LogoutAdminDocument,
    "\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsAdminDocument,
    "\n  mutation updateProductActivationAdmin(\n    $updateProductActivationAdmin: UpdateProductActivationAdminInputsGQL!\n  ) {\n    updateProductActivationAdmin(\n      updateProductActivationAdmin: $updateProductActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n": types.UpdateProductActivationAdminDocument,
    "\n  mutation createProductAdmin(\n    $createProductAdminInputs: CreateProductAdminInputsGQL!\n  ) {\n    createProductAdmin(createProductAdminInputs: $createProductAdminInputs) {\n      slug\n      id\n      name\n      createdAt\n      updatedAt\n      deletedAt\n      isActive\n      text\n    }\n  }\n": types.CreateProductAdminDocument,
    "\n  mutation updateProductAdmin(\n    $updateProductAdminInputs: UpdateProductAdminInputsGQL!\n  ) {\n    updateProductAdmin(updateProductAdminInputs: $updateProductAdminInputs) {\n      slug\n      id\n      name\n      createdAt\n      updatedAt\n      deletedAt\n      isActive\n      text\n    }\n  }\n": types.UpdateProductAdminDocument,
    "\n  mutation addImageToProductAdmin(\n    $addImageToProductAdmin: AddImageToProductAdminInputsGQL!\n  ) {\n    addImageToProductAdmin(addImageToProductAdmin: $addImageToProductAdmin) {\n      id\n    }\n  }\n": types.AddImageToProductAdminDocument,
    "\n  query getProductByIdAdmin($productId: String!) {\n    getProductByIdAdmin(productId: $productId) {\n      id\n      name\n      slug\n      isActive\n      text\n      fileUses {\n        file {\n          id\n          filename\n          path\n        }\n      }\n    }\n  }\n": types.GetProductByIdAdminDocument,
    "\n  query getUsersAdmin(\n    $getUsersAdminArgs: GetUsersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getUsersAdmin(\n      getUsersAdminArgs: $getUsersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        createdAt\n        updatedAt\n        deletedAt\n        username\n        firstName\n        lastName\n        email\n        phone\n        roles\n        isActive\n      }\n    }\n  }\n": types.GetUsersAdminDocument,
    "\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n": types.LoginAdminDocument,
    "\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n": types.MeAdminDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeImageAdmin($removeImageAdmin: RemoveImageAdminInputsGQL!) {\n    removeImageAdmin(removeImageAdmin: $removeImageAdmin) {\n      id\n      filename\n    }\n  }\n"): (typeof documents)["\n  mutation removeImageAdmin($removeImageAdmin: RemoveImageAdminInputsGQL!) {\n    removeImageAdmin(removeImageAdmin: $removeImageAdmin) {\n      id\n      filename\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      id\n      path\n      filename\n    }\n  }\n"): (typeof documents)["\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      id\n      path\n      filename\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"): (typeof documents)["\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProductActivationAdmin(\n    $updateProductActivationAdmin: UpdateProductActivationAdminInputsGQL!\n  ) {\n    updateProductActivationAdmin(\n      updateProductActivationAdmin: $updateProductActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n"): (typeof documents)["\n  mutation updateProductActivationAdmin(\n    $updateProductActivationAdmin: UpdateProductActivationAdminInputsGQL!\n  ) {\n    updateProductActivationAdmin(\n      updateProductActivationAdmin: $updateProductActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProductAdmin(\n    $createProductAdminInputs: CreateProductAdminInputsGQL!\n  ) {\n    createProductAdmin(createProductAdminInputs: $createProductAdminInputs) {\n      slug\n      id\n      name\n      createdAt\n      updatedAt\n      deletedAt\n      isActive\n      text\n    }\n  }\n"): (typeof documents)["\n  mutation createProductAdmin(\n    $createProductAdminInputs: CreateProductAdminInputsGQL!\n  ) {\n    createProductAdmin(createProductAdminInputs: $createProductAdminInputs) {\n      slug\n      id\n      name\n      createdAt\n      updatedAt\n      deletedAt\n      isActive\n      text\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProductAdmin(\n    $updateProductAdminInputs: UpdateProductAdminInputsGQL!\n  ) {\n    updateProductAdmin(updateProductAdminInputs: $updateProductAdminInputs) {\n      slug\n      id\n      name\n      createdAt\n      updatedAt\n      deletedAt\n      isActive\n      text\n    }\n  }\n"): (typeof documents)["\n  mutation updateProductAdmin(\n    $updateProductAdminInputs: UpdateProductAdminInputsGQL!\n  ) {\n    updateProductAdmin(updateProductAdminInputs: $updateProductAdminInputs) {\n      slug\n      id\n      name\n      createdAt\n      updatedAt\n      deletedAt\n      isActive\n      text\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addImageToProductAdmin(\n    $addImageToProductAdmin: AddImageToProductAdminInputsGQL!\n  ) {\n    addImageToProductAdmin(addImageToProductAdmin: $addImageToProductAdmin) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation addImageToProductAdmin(\n    $addImageToProductAdmin: AddImageToProductAdminInputsGQL!\n  ) {\n    addImageToProductAdmin(addImageToProductAdmin: $addImageToProductAdmin) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProductByIdAdmin($productId: String!) {\n    getProductByIdAdmin(productId: $productId) {\n      id\n      name\n      slug\n      isActive\n      text\n      fileUses {\n        file {\n          id\n          filename\n          path\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProductByIdAdmin($productId: String!) {\n    getProductByIdAdmin(productId: $productId) {\n      id\n      name\n      slug\n      isActive\n      text\n      fileUses {\n        file {\n          id\n          filename\n          path\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUsersAdmin(\n    $getUsersAdminArgs: GetUsersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getUsersAdmin(\n      getUsersAdminArgs: $getUsersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        createdAt\n        updatedAt\n        deletedAt\n        username\n        firstName\n        lastName\n        email\n        phone\n        roles\n        isActive\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUsersAdmin(\n    $getUsersAdminArgs: GetUsersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getUsersAdmin(\n      getUsersAdminArgs: $getUsersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        createdAt\n        updatedAt\n        deletedAt\n        username\n        firstName\n        lastName\n        email\n        phone\n        roles\n        isActive\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"): (typeof documents)["\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"): (typeof documents)["\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;