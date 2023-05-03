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
    "\n  query getProvincesAdminAutoComplete(\n    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!\n  ) {\n    getProvincesAdmin(\n      getProvincesAdminArgs: $getProvincesAdminArgs\n      paginationArgs: { limit: 30, page: 1 }\n    ) {\n      edges {\n        id\n        name\n      }\n    }\n  }\n": types.GetProvincesAdminAutoCompleteDocument,
    "\n  mutation removeImageAdmin($removeImageAdmin: RemoveImageAdminInputsGQL!) {\n    removeImageAdmin(removeImageAdmin: $removeImageAdmin) {\n      id\n      filename\n    }\n  }\n": types.RemoveImageAdminDocument,
    "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      id\n      path\n      filename\n    }\n  }\n": types.UploadFileDocument,
    "\n  query getFileByIdAdmin($fileId: String!) {\n    getFileByIdAdmin(fileId: $fileId) {\n      id\n      filename\n    }\n  }\n": types.GetFileByIdAdminDocument,
    "\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n": types.MeAdminDocument,
    "\n  mutation updateCustomerActionAdminInputs(\n    $updateCustomerActionAdminInputs: UpdateCustomerActionAdminInputsGQL!\n  ) {\n    updateCustomerActionAdmin(\n      updateCustomerActionAdminInputs: $updateCustomerActionAdminInputs\n    ) {\n      id\n      text\n      customerId\n      userId\n    }\n  }\n": types.UpdateCustomerActionAdminInputsDocument,
    "\n  mutation addFileToCustomerActionAdmin(\n    $addFileToCustomerActionAdmin: AddFileToCustomerActionAdminInputsGQL!\n  ) {\n    addFileToCustomerActionAdmin(\n      addFileToCustomerActionAdmin: $addFileToCustomerActionAdmin\n    ) {\n      id\n    }\n  }\n": types.AddFileToCustomerActionAdminDocument,
    "\n  query getCustomerActionByIdAdmin($customerActionId: String!) {\n    getCustomerActionByIdAdmin(customerActionId: $customerActionId) {\n      id\n      text\n      customerId\n      customer {\n        email\n        jobTitle\n        phone\n        officePhone\n      }\n      userId\n      user {\n        id\n        firstName\n        username\n      }\n      fileUses {\n        id\n        file {\n          id\n          filename\n        }\n      }\n    }\n  }\n": types.GetCustomerActionByIdAdminDocument,
    "\n  query getCustomerActionsAdmin(\n    $getCustomerActionsAdminArgs: GetCustomerActionsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomerActionsAdmin(\n      getCustomerActionsAdminArgs: $getCustomerActionsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        text\n        customer {\n          email\n          jobTitle\n          phone\n          officePhone\n        }\n        userId\n        user {\n          id\n          firstName\n          lastName\n          username\n        }\n        fileUses {\n          id\n          file {\n            id\n            filename\n          }\n        }\n      }\n    }\n  }\n": types.GetCustomerActionsAdminDocument,
    "\n  mutation createCustomerActionAdminInputs(\n    $createCustomerActionAdminInputs: CreateCustomerActionAdminInputsGQL!\n  ) {\n    createCustomerActionAdmin(\n      createCustomerActionAdminInputs: $createCustomerActionAdminInputs\n    ) {\n      id\n      text\n      customerId\n      userId\n    }\n  }\n": types.CreateCustomerActionAdminInputsDocument,
    "\n  query getCustomerByIdAdmin($customerId: String!) {\n    getCustomerByIdAdmin(customerId: $customerId) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.GetCustomerByIdAdminDocument,
    "\n  query getCustomersAdmin(\n    $getCustomersAdminArgs: GetCustomersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomersAdmin(\n      getCustomersAdminArgs: $getCustomersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        firstName\n        lastName\n        email\n        jobTitle\n        phone\n        officePhone\n        isActive\n        cityId\n        city {\n          id\n          name\n          province {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetCustomersAdminDocument,
    "\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n": types.LoginAdminDocument,
    "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n": types.LogoutAdminDocument,
    "\n  query getProductByIdAdmin($productId: String!) {\n    getProductByIdAdmin(productId: $productId) {\n      id\n      name\n      slug\n      isActive\n      text\n      productColors {\n        id\n        colorId\n        color {\n          id\n          value\n          name\n        }\n      }\n      productReviews {\n        id\n        reviewer\n        text\n      }\n      productCategories {\n        id\n        categoryId\n        category {\n          id\n          name\n        }\n      }\n      productProperties {\n        id\n        value\n        property {\n          id\n          name\n          unit\n          isActive\n        }\n      }\n      fileUses {\n        file {\n          id\n          filename\n          path\n        }\n      }\n    }\n  }\n": types.GetProductByIdAdminDocument,
    "\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsAdminDocument,
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
export function graphql(source: "\n  query getProvincesAdminAutoComplete(\n    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!\n  ) {\n    getProvincesAdmin(\n      getProvincesAdminArgs: $getProvincesAdminArgs\n      paginationArgs: { limit: 30, page: 1 }\n    ) {\n      edges {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProvincesAdminAutoComplete(\n    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!\n  ) {\n    getProvincesAdmin(\n      getProvincesAdminArgs: $getProvincesAdminArgs\n      paginationArgs: { limit: 30, page: 1 }\n    ) {\n      edges {\n        id\n        name\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  query getFileByIdAdmin($fileId: String!) {\n    getFileByIdAdmin(fileId: $fileId) {\n      id\n      filename\n    }\n  }\n"): (typeof documents)["\n  query getFileByIdAdmin($fileId: String!) {\n    getFileByIdAdmin(fileId: $fileId) {\n      id\n      filename\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"): (typeof documents)["\n  query meAdmin {\n    meAdmin {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCustomerActionAdminInputs(\n    $updateCustomerActionAdminInputs: UpdateCustomerActionAdminInputsGQL!\n  ) {\n    updateCustomerActionAdmin(\n      updateCustomerActionAdminInputs: $updateCustomerActionAdminInputs\n    ) {\n      id\n      text\n      customerId\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation updateCustomerActionAdminInputs(\n    $updateCustomerActionAdminInputs: UpdateCustomerActionAdminInputsGQL!\n  ) {\n    updateCustomerActionAdmin(\n      updateCustomerActionAdminInputs: $updateCustomerActionAdminInputs\n    ) {\n      id\n      text\n      customerId\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addFileToCustomerActionAdmin(\n    $addFileToCustomerActionAdmin: AddFileToCustomerActionAdminInputsGQL!\n  ) {\n    addFileToCustomerActionAdmin(\n      addFileToCustomerActionAdmin: $addFileToCustomerActionAdmin\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation addFileToCustomerActionAdmin(\n    $addFileToCustomerActionAdmin: AddFileToCustomerActionAdminInputsGQL!\n  ) {\n    addFileToCustomerActionAdmin(\n      addFileToCustomerActionAdmin: $addFileToCustomerActionAdmin\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomerActionByIdAdmin($customerActionId: String!) {\n    getCustomerActionByIdAdmin(customerActionId: $customerActionId) {\n      id\n      text\n      customerId\n      customer {\n        email\n        jobTitle\n        phone\n        officePhone\n      }\n      userId\n      user {\n        id\n        firstName\n        username\n      }\n      fileUses {\n        id\n        file {\n          id\n          filename\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCustomerActionByIdAdmin($customerActionId: String!) {\n    getCustomerActionByIdAdmin(customerActionId: $customerActionId) {\n      id\n      text\n      customerId\n      customer {\n        email\n        jobTitle\n        phone\n        officePhone\n      }\n      userId\n      user {\n        id\n        firstName\n        username\n      }\n      fileUses {\n        id\n        file {\n          id\n          filename\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomerActionsAdmin(\n    $getCustomerActionsAdminArgs: GetCustomerActionsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomerActionsAdmin(\n      getCustomerActionsAdminArgs: $getCustomerActionsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        text\n        customer {\n          email\n          jobTitle\n          phone\n          officePhone\n        }\n        userId\n        user {\n          id\n          firstName\n          lastName\n          username\n        }\n        fileUses {\n          id\n          file {\n            id\n            filename\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCustomerActionsAdmin(\n    $getCustomerActionsAdminArgs: GetCustomerActionsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomerActionsAdmin(\n      getCustomerActionsAdminArgs: $getCustomerActionsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        text\n        customer {\n          email\n          jobTitle\n          phone\n          officePhone\n        }\n        userId\n        user {\n          id\n          firstName\n          lastName\n          username\n        }\n        fileUses {\n          id\n          file {\n            id\n            filename\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createCustomerActionAdminInputs(\n    $createCustomerActionAdminInputs: CreateCustomerActionAdminInputsGQL!\n  ) {\n    createCustomerActionAdmin(\n      createCustomerActionAdminInputs: $createCustomerActionAdminInputs\n    ) {\n      id\n      text\n      customerId\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation createCustomerActionAdminInputs(\n    $createCustomerActionAdminInputs: CreateCustomerActionAdminInputsGQL!\n  ) {\n    createCustomerActionAdmin(\n      createCustomerActionAdminInputs: $createCustomerActionAdminInputs\n    ) {\n      id\n      text\n      customerId\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomerByIdAdmin($customerId: String!) {\n    getCustomerByIdAdmin(customerId: $customerId) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCustomerByIdAdmin($customerId: String!) {\n    getCustomerByIdAdmin(customerId: $customerId) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomersAdmin(\n    $getCustomersAdminArgs: GetCustomersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomersAdmin(\n      getCustomersAdminArgs: $getCustomersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        firstName\n        lastName\n        email\n        jobTitle\n        phone\n        officePhone\n        isActive\n        cityId\n        city {\n          id\n          name\n          province {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCustomersAdmin(\n    $getCustomersAdminArgs: GetCustomersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomersAdmin(\n      getCustomersAdminArgs: $getCustomersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        firstName\n        lastName\n        email\n        jobTitle\n        phone\n        officePhone\n        isActive\n        cityId\n        city {\n          id\n          name\n          province {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"): (typeof documents)["\n  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {\n    loginAdmin(loginAdminInputs: $loginAdminInputs) {\n      id\n      lastName\n      firstName\n      createdAt\n      roles\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"): (typeof documents)["\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProductByIdAdmin($productId: String!) {\n    getProductByIdAdmin(productId: $productId) {\n      id\n      name\n      slug\n      isActive\n      text\n      productColors {\n        id\n        colorId\n        color {\n          id\n          value\n          name\n        }\n      }\n      productReviews {\n        id\n        reviewer\n        text\n      }\n      productCategories {\n        id\n        categoryId\n        category {\n          id\n          name\n        }\n      }\n      productProperties {\n        id\n        value\n        property {\n          id\n          name\n          unit\n          isActive\n        }\n      }\n      fileUses {\n        file {\n          id\n          filename\n          path\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProductByIdAdmin($productId: String!) {\n    getProductByIdAdmin(productId: $productId) {\n      id\n      name\n      slug\n      isActive\n      text\n      productColors {\n        id\n        colorId\n        color {\n          id\n          value\n          name\n        }\n      }\n      productReviews {\n        id\n        reviewer\n        text\n      }\n      productCategories {\n        id\n        categoryId\n        category {\n          id\n          name\n        }\n      }\n      productProperties {\n        id\n        value\n        property {\n          id\n          name\n          unit\n          isActive\n        }\n      }\n      fileUses {\n        file {\n          id\n          filename\n          path\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;