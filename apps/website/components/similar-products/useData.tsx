import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import { url } from "@pishroo/utils";

import {
  GetProductsPublicSimilarProductsQuery,
  GetProductsPublicSimilarProductsQueryVariables,
} from "@website/gql/graphql";

import { PRODUCT_DETAILS_ROUTE } from "@website/constants";
import { GET_PROJECTS_PUBLIC_SIMILAR_PRODUCTS } from "./gql";

const useData = () => {
  const router = useRouter();

  const [products, setProducts] = useState<
    GetProductsPublicSimilarProductsQuery["getProductsPublic"]["edges"]
  >([]);

  const { loading } = useQuery<
    GetProductsPublicSimilarProductsQuery,
    GetProductsPublicSimilarProductsQueryVariables
  >(GET_PROJECTS_PUBLIC_SIMILAR_PRODUCTS, {
    variables: {
      getProductsPublicArgs: { orderRandom: true },
    },
    onError: (error) => {},
    onCompleted: ({ getProductsPublic }) => {
      setProducts(getProductsPublic?.edges);
    },
  });

  const onClickProduct = (slugProduct: string) => {
    router.push(url.generate(PRODUCT_DETAILS_ROUTE, { slugProduct }, {}));
  };

  return {
    onClickProduct,
    products,
    loading,
  };
};

export default useData;
