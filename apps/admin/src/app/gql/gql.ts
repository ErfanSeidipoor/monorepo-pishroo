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
    "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n": types.LogoutAdminDocument,
    "\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsAdminDocument,
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
export function graphql(source: "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"): (typeof documents)["\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n"];
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