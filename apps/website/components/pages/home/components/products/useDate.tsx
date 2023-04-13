import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter, NextRouter } from "next/router";

import { GetProductsPublicArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  GetCategoriesPublicProductPageQuery,
  GetCategoriesPublicProductPageQueryVariables,
  GetProductsPublicArgsGql,
  GetProductsPublicProductPageQuery,
  GetProductsPublicProductPageQueryVariables,
  PaginationArgsGql,
} from "@website/gql/graphql";

import { PRODUCT_ROUTE } from "@website/constants";
import { QUERY_GET_CATEGORIES_PUBLIC } from "./gql";

const useData = () => {
  const router = useRouter();
  const [catergories, setCatergories] = useState<
    GetCategoriesPublicProductPageQuery["getCategoriesPublic"]["edges"]
  >([]);

  useQuery<
    GetCategoriesPublicProductPageQuery,
    GetCategoriesPublicProductPageQueryVariables
  >(QUERY_GET_CATEGORIES_PUBLIC, {
    variables: {
      getCategoriesPublicArgs: {},
    },
    onError: (error) => {},
    onCompleted: ({ getCategoriesPublic }) => {
      setCatergories(getCategoriesPublic?.edges);
    },
  });

  const onClickCategory = (getProductsPublicArgs: GetProductsPublicArgs) => {
    router.push(url.generate(PRODUCT_ROUTE, {}, getProductsPublicArgs));
  };

  return {
    catergories,
    onClickCategory,
  };
};

export default useData;
