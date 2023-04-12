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
import { QUERY_GET_CATEGORIES_PUBLIC, QUERY_GET_PRODUCTS_PUBLIC } from "./gql";

const useData = () => {
  const router = useRouter();

  const [products, setProducts] = useState<
    GetProductsPublicProductPageQuery["getProductsPublic"]["edges"]
  >([]);

  const [catergories, setCatergories] = useState<
    GetCategoriesPublicProductPageQuery["getCategoriesPublic"]["edges"]
  >([]);

  const convertSearchParamsToArgs = (query: NextRouter["query"]) => {
    return {
      categoryIdentity: `${query["categoryIdentity"] || ""}`,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetProductsPublicProductPageQuery["getProductsPublic"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetProductsPublicArgsGql>({
    ...convertSearchParamsToArgs(router.query),
  });

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: Number(router.query["page"]) || 1,
  });

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

  const { loading } = useQuery<
    GetProductsPublicProductPageQuery,
    GetProductsPublicProductPageQueryVariables
  >(QUERY_GET_PRODUCTS_PUBLIC, {
    variables: {
      getProductsPublicArgs: queryArgs,
      paginationArgs: { ...paginationArgs, limit: 30 },
    },
    onError: (error) => {
      // enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProductsPublic }) => {
      setProducts(getProductsPublic?.edges);
      setPageInfo(getProductsPublic?.pageInfo);
    },
  });

  useEffect(() => {
    setPaginationArgs({
      page: Number(router.query["page"]) || 1,
    });
    setQueryArgs({
      ...convertSearchParamsToArgs(router.query),
    });
  }, [router]);

  const onSubmitFilter = (getProductsPublicArgs: GetProductsPublicArgs) => {
    router.push(url.generate(PRODUCT_ROUTE, {}, getProductsPublicArgs));
  };

  const onPageSelect = (page: number) => {
    router.push(url.generate(PRODUCT_ROUTE, {}, { ...paginationArgs, page }));
  };

  return {
    pageInfo,
    products,
    loading,
    paginationArgs,
    onSubmitFilter,
    onPageSelect,
    catergories,
    queryArgs,
  };
};

export default useData;
