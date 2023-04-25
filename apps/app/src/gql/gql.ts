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
    "\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n": types.MeAdminDocument,
    "\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n": types.LoginAdminDocument,
    "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n": types.LogoutAdminDocument,
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
export function graphql(source: "\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"): (typeof documents)["\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"): (typeof documents)["\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"): (typeof documents)["\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;