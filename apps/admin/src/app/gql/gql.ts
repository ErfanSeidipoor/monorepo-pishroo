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
    "\n  query getCitiesAdminAutoComplete(\n    $getCitiesAdminArgs: GetCitiesAdminArgsGQL!\n  ) {\n    getCitiesAdmin(\n      getCitiesAdminArgs: $getCitiesAdminArgs\n      paginationArgs: { limit: 30, page: 1 }\n    ) {\n      edges {\n        id\n        name\n        province {\n          name\n          id\n        }\n      }\n    }\n  }\n": types.GetCitiesAdminAutoCompleteDocument,
    "\n  query getProvincesAdminAutoComplete(\n    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!\n  ) {\n    getProvincesAdmin(\n      getProvincesAdminArgs: $getProvincesAdminArgs\n      paginationArgs: { limit: 30, page: 1 }\n    ) {\n      edges {\n        id\n        name\n      }\n    }\n  }\n": types.GetProvincesAdminAutoCompleteDocument,
    "\n  mutation removeImageAdmin($removeImageAdmin: RemoveImageAdminInputsGQL!) {\n    removeImageAdmin(removeImageAdmin: $removeImageAdmin) {\n      id\n      filename\n    }\n  }\n": types.RemoveImageAdminDocument,
    "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      id\n      path\n      filename\n    }\n  }\n": types.UploadFileDocument,
    "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n": types.LogoutAdminDocument,
    "\n  query getCitiesAdmin(\n    $getCitiesAdminArgs: GetCitiesAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCitiesAdmin(\n      getCitiesAdminArgs: $getCitiesAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        name\n        province {\n          name\n          id\n        }\n      }\n    }\n  }\n": types.GetCitiesAdminDocument,
    "\n  mutation createCityAdmin($createCityAdminInputs: CreateCityAdminInputsGQL!) {\n    createCityAdmin(createCityAdminInputs: $createCityAdminInputs) {\n      id\n      name\n      province {\n        id\n        name\n      }\n    }\n  }\n": types.CreateCityAdminDocument,
    "\n  mutation updateCityAdmin($updateCityAdminInputs: UpdateCityAdminInputsGQL!) {\n    updateCityAdmin(updateCityAdminInputs: $updateCityAdminInputs) {\n      id\n      name\n      provinceId\n      province {\n        name\n        id\n      }\n    }\n  }\n": types.UpdateCityAdminDocument,
    "\n  query getCityByIdAdmin($cityId: String!) {\n    getCityByIdAdmin(cityId: $cityId) {\n      id\n      name\n      provinceId\n      province {\n        name\n        id\n      }\n    }\n  }\n": types.GetCityByIdAdminDocument,
    "\n  query getCustomersAdmin(\n    $getCustomersAdminArgs: GetCustomersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomersAdmin(\n      getCustomersAdminArgs: $getCustomersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        firstName\n        lastName\n        email\n        jobTitle\n        phone\n        officePhone\n        isActive\n        cityId\n        city {\n          id\n          name\n          province {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetCustomersAdminDocument,
    "\n  mutation updateCustomerActivationAdmin(\n    $updateCustomerActivationAdmin: UpdateCustomerActivationAdminInputsGQL!\n  ) {\n    updateCustomerActivationAdmin(\n      updateCustomerActivationAdmin: $updateCustomerActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n": types.UpdateCustomerActivationAdminDocument,
    "\n  mutation createCustomerAdmin(\n    $createCustomerAdminInputs: CreateCustomerAdminInputsGQL!\n  ) {\n    createCustomerAdmin(createCustomerAdminInputs: $createCustomerAdminInputs) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n    }\n  }\n": types.CreateCustomerAdminDocument,
    "\n  mutation updateCustomerAdmin(\n    $updateCustomerAdminInputs: UpdateCustomerAdminInputsGQL!\n  ) {\n    updateCustomerAdmin(updateCustomerAdminInputs: $updateCustomerAdminInputs) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.UpdateCustomerAdminDocument,
    "\n  query getCustomerByIdAdmin($customerId: String!) {\n    getCustomerByIdAdmin(customerId: $customerId) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.GetCustomerByIdAdminDocument,
    "\n  query getProductsAdmin(\n    $getProductsAdminArgs: GetProductsAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProductsAdmin(\n      getProductsAdminArgs: $getProductsAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        slug\n        id\n        name\n        isActive\n        createdAt\n        updatedAt\n        deletedAt\n        text\n        productProperties {\n          id\n          value\n          property {\n            name\n            unit\n          }\n        }\n        fileUses {\n          id\n          status\n          type\n          isPublic\n          file {\n            filename\n            size\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsAdminDocument,
    "\n  mutation updateProductActivationAdmin(\n    $updateProductActivationAdmin: UpdateProductActivationAdminInputsGQL!\n  ) {\n    updateProductActivationAdmin(\n      updateProductActivationAdmin: $updateProductActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n": types.UpdateProductActivationAdminDocument,
    "\n  mutation createProductAdmin(\n    $createProductAdminInputs: CreateProductAdminInputsGQL!\n  ) {\n    createProductAdmin(createProductAdminInputs: $createProductAdminInputs) {\n      slug\n      id\n      name\n      createdAt\n      updatedAt\n      deletedAt\n      isActive\n      text\n    }\n  }\n": types.CreateProductAdminDocument,
    "\n  mutation updateProductAdmin(\n    $updateProductAdminInputs: UpdateProductAdminInputsGQL!\n  ) {\n    updateProductAdmin(updateProductAdminInputs: $updateProductAdminInputs) {\n      slug\n      id\n      name\n      createdAt\n      updatedAt\n      deletedAt\n      isActive\n      text\n    }\n  }\n": types.UpdateProductAdminDocument,
    "\n  mutation addImageToProductAdmin(\n    $addImageToProductAdmin: AddImageToProductAdminInputsGQL!\n  ) {\n    addImageToProductAdmin(addImageToProductAdmin: $addImageToProductAdmin) {\n      id\n    }\n  }\n": types.AddImageToProductAdminDocument,
    "\n  query getProductByIdAdmin($productId: String!) {\n    getProductByIdAdmin(productId: $productId) {\n      id\n      name\n      slug\n      isActive\n      text\n      fileUses {\n        file {\n          id\n          filename\n          path\n        }\n      }\n    }\n  }\n": types.GetProductByIdAdminDocument,
    "\n  query getProvincesAdmin(\n    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProvincesAdmin(\n      getProvincesAdminArgs: $getProvincesAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        name\n      }\n    }\n  }\n": types.GetProvincesAdminDocument,
    "\n  mutation createProvinceAdmin(\n    $createProvinceAdminInputs: CreateProvinceAdminInputsGQL!\n  ) {\n    createProvinceAdmin(createProvinceAdminInputs: $createProvinceAdminInputs) {\n      id\n      name\n    }\n  }\n": types.CreateProvinceAdminDocument,
    "\n  mutation updateProvinceAdmin(\n    $updateProvinceAdminInputs: UpdateProvinceAdminInputsGQL!\n  ) {\n    updateProvinceAdmin(updateProvinceAdminInputs: $updateProvinceAdminInputs) {\n      id\n      name\n    }\n  }\n": types.UpdateProvinceAdminDocument,
    "\n  query getProvinceByIdAdmin($provinceId: String!) {\n    getProvinceByIdAdmin(provinceId: $provinceId) {\n      id\n      name\n    }\n  }\n": types.GetProvinceByIdAdminDocument,
    "\n  query getUsersAdmin(\n    $getUsersAdminArgs: GetUsersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getUsersAdmin(\n      getUsersAdminArgs: $getUsersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        createdAt\n        updatedAt\n        deletedAt\n        username\n        firstName\n        lastName\n        email\n        phone\n        roles\n        isActive\n      }\n    }\n  }\n": types.GetUsersAdminDocument,
    "\n  mutation updateUserActivationAdmin(\n    $updateUserActivationAdmin: UpdateUserActivationAdminInputsGQL!\n  ) {\n    updateUserActivationAdmin(\n      updateUserActivationAdmin: $updateUserActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n": types.UpdateUserActivationAdminDocument,
    "\n  mutation createUserAdmin($createUserAdminInputs: CreateUserAdminInputsGQL!) {\n    createUserAdmin(createUserAdminInputs: $createUserAdminInputs) {\n      id\n      createdAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n": types.CreateUserAdminDocument,
    "\n  mutation updateUserAdmin($updateUserAdminInputs: UpdateUserAdminInputsGQL!) {\n    updateUserAdmin(updateUserAdminInputs: $updateUserAdminInputs) {\n      id\n      createdAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n": types.UpdateUserAdminDocument,
    "\n  query getUserByIdAdmin($userId: String!) {\n    getUserByIdAdmin(userId: $userId) {\n      id\n      createdAt\n      updatedAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n": types.GetUserByIdAdminDocument,
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
export function graphql(source: "\n  query getCitiesAdminAutoComplete(\n    $getCitiesAdminArgs: GetCitiesAdminArgsGQL!\n  ) {\n    getCitiesAdmin(\n      getCitiesAdminArgs: $getCitiesAdminArgs\n      paginationArgs: { limit: 30, page: 1 }\n    ) {\n      edges {\n        id\n        name\n        province {\n          name\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCitiesAdminAutoComplete(\n    $getCitiesAdminArgs: GetCitiesAdminArgsGQL!\n  ) {\n    getCitiesAdmin(\n      getCitiesAdminArgs: $getCitiesAdminArgs\n      paginationArgs: { limit: 30, page: 1 }\n    ) {\n      edges {\n        id\n        name\n        province {\n          name\n          id\n        }\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"): (typeof documents)["\n  query logoutAdmin {\n    logoutAdmin {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCitiesAdmin(\n    $getCitiesAdminArgs: GetCitiesAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCitiesAdmin(\n      getCitiesAdminArgs: $getCitiesAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        name\n        province {\n          name\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCitiesAdmin(\n    $getCitiesAdminArgs: GetCitiesAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCitiesAdmin(\n      getCitiesAdminArgs: $getCitiesAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        name\n        province {\n          name\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createCityAdmin($createCityAdminInputs: CreateCityAdminInputsGQL!) {\n    createCityAdmin(createCityAdminInputs: $createCityAdminInputs) {\n      id\n      name\n      province {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createCityAdmin($createCityAdminInputs: CreateCityAdminInputsGQL!) {\n    createCityAdmin(createCityAdminInputs: $createCityAdminInputs) {\n      id\n      name\n      province {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCityAdmin($updateCityAdminInputs: UpdateCityAdminInputsGQL!) {\n    updateCityAdmin(updateCityAdminInputs: $updateCityAdminInputs) {\n      id\n      name\n      provinceId\n      province {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateCityAdmin($updateCityAdminInputs: UpdateCityAdminInputsGQL!) {\n    updateCityAdmin(updateCityAdminInputs: $updateCityAdminInputs) {\n      id\n      name\n      provinceId\n      province {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCityByIdAdmin($cityId: String!) {\n    getCityByIdAdmin(cityId: $cityId) {\n      id\n      name\n      provinceId\n      province {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCityByIdAdmin($cityId: String!) {\n    getCityByIdAdmin(cityId: $cityId) {\n      id\n      name\n      provinceId\n      province {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomersAdmin(\n    $getCustomersAdminArgs: GetCustomersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomersAdmin(\n      getCustomersAdminArgs: $getCustomersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        firstName\n        lastName\n        email\n        jobTitle\n        phone\n        officePhone\n        isActive\n        cityId\n        city {\n          id\n          name\n          province {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCustomersAdmin(\n    $getCustomersAdminArgs: GetCustomersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getCustomersAdmin(\n      getCustomersAdminArgs: $getCustomersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        firstName\n        lastName\n        email\n        jobTitle\n        phone\n        officePhone\n        isActive\n        cityId\n        city {\n          id\n          name\n          province {\n            name\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCustomerActivationAdmin(\n    $updateCustomerActivationAdmin: UpdateCustomerActivationAdminInputsGQL!\n  ) {\n    updateCustomerActivationAdmin(\n      updateCustomerActivationAdmin: $updateCustomerActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n"): (typeof documents)["\n  mutation updateCustomerActivationAdmin(\n    $updateCustomerActivationAdmin: UpdateCustomerActivationAdminInputsGQL!\n  ) {\n    updateCustomerActivationAdmin(\n      updateCustomerActivationAdmin: $updateCustomerActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createCustomerAdmin(\n    $createCustomerAdminInputs: CreateCustomerAdminInputsGQL!\n  ) {\n    createCustomerAdmin(createCustomerAdminInputs: $createCustomerAdminInputs) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n    }\n  }\n"): (typeof documents)["\n  mutation createCustomerAdmin(\n    $createCustomerAdminInputs: CreateCustomerAdminInputsGQL!\n  ) {\n    createCustomerAdmin(createCustomerAdminInputs: $createCustomerAdminInputs) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCustomerAdmin(\n    $updateCustomerAdminInputs: UpdateCustomerAdminInputsGQL!\n  ) {\n    updateCustomerAdmin(updateCustomerAdminInputs: $updateCustomerAdminInputs) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateCustomerAdmin(\n    $updateCustomerAdminInputs: UpdateCustomerAdminInputsGQL!\n  ) {\n    updateCustomerAdmin(updateCustomerAdminInputs: $updateCustomerAdminInputs) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomerByIdAdmin($customerId: String!) {\n    getCustomerByIdAdmin(customerId: $customerId) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCustomerByIdAdmin($customerId: String!) {\n    getCustomerByIdAdmin(customerId: $customerId) {\n      id\n      firstName\n      lastName\n      email\n      jobTitle\n      phone\n      officePhone\n      isActive\n      cityId\n      city {\n        name\n        id\n        province {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  query getProvincesAdmin(\n    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProvincesAdmin(\n      getProvincesAdminArgs: $getProvincesAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProvincesAdmin(\n    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getProvincesAdmin(\n      getProvincesAdminArgs: $getProvincesAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProvinceAdmin(\n    $createProvinceAdminInputs: CreateProvinceAdminInputsGQL!\n  ) {\n    createProvinceAdmin(createProvinceAdminInputs: $createProvinceAdminInputs) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createProvinceAdmin(\n    $createProvinceAdminInputs: CreateProvinceAdminInputsGQL!\n  ) {\n    createProvinceAdmin(createProvinceAdminInputs: $createProvinceAdminInputs) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProvinceAdmin(\n    $updateProvinceAdminInputs: UpdateProvinceAdminInputsGQL!\n  ) {\n    updateProvinceAdmin(updateProvinceAdminInputs: $updateProvinceAdminInputs) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation updateProvinceAdmin(\n    $updateProvinceAdminInputs: UpdateProvinceAdminInputsGQL!\n  ) {\n    updateProvinceAdmin(updateProvinceAdminInputs: $updateProvinceAdminInputs) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProvinceByIdAdmin($provinceId: String!) {\n    getProvinceByIdAdmin(provinceId: $provinceId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query getProvinceByIdAdmin($provinceId: String!) {\n    getProvinceByIdAdmin(provinceId: $provinceId) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUsersAdmin(\n    $getUsersAdminArgs: GetUsersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getUsersAdmin(\n      getUsersAdminArgs: $getUsersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        createdAt\n        updatedAt\n        deletedAt\n        username\n        firstName\n        lastName\n        email\n        phone\n        roles\n        isActive\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUsersAdmin(\n    $getUsersAdminArgs: GetUsersAdminArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getUsersAdmin(\n      getUsersAdminArgs: $getUsersAdminArgs\n      paginationArgs: $paginationArgs\n    ) {\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        currentPage\n        totalPages\n      }\n      edges {\n        id\n        createdAt\n        updatedAt\n        deletedAt\n        username\n        firstName\n        lastName\n        email\n        phone\n        roles\n        isActive\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUserActivationAdmin(\n    $updateUserActivationAdmin: UpdateUserActivationAdminInputsGQL!\n  ) {\n    updateUserActivationAdmin(\n      updateUserActivationAdmin: $updateUserActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n"): (typeof documents)["\n  mutation updateUserActivationAdmin(\n    $updateUserActivationAdmin: UpdateUserActivationAdminInputsGQL!\n  ) {\n    updateUserActivationAdmin(\n      updateUserActivationAdmin: $updateUserActivationAdmin\n    ) {\n      id\n      isActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUserAdmin($createUserAdminInputs: CreateUserAdminInputsGQL!) {\n    createUserAdmin(createUserAdminInputs: $createUserAdminInputs) {\n      id\n      createdAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n"): (typeof documents)["\n  mutation createUserAdmin($createUserAdminInputs: CreateUserAdminInputsGQL!) {\n    createUserAdmin(createUserAdminInputs: $createUserAdminInputs) {\n      id\n      createdAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUserAdmin($updateUserAdminInputs: UpdateUserAdminInputsGQL!) {\n    updateUserAdmin(updateUserAdminInputs: $updateUserAdminInputs) {\n      id\n      createdAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n"): (typeof documents)["\n  mutation updateUserAdmin($updateUserAdminInputs: UpdateUserAdminInputsGQL!) {\n    updateUserAdmin(updateUserAdminInputs: $updateUserAdminInputs) {\n      id\n      createdAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserByIdAdmin($userId: String!) {\n    getUserByIdAdmin(userId: $userId) {\n      id\n      createdAt\n      updatedAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n"): (typeof documents)["\n  query getUserByIdAdmin($userId: String!) {\n    getUserByIdAdmin(userId: $userId) {\n      id\n      createdAt\n      updatedAt\n      username\n      firstName\n      lastName\n      email\n      phone\n      roles\n      isActive\n    }\n  }\n"];
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