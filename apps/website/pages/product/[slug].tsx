import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { ProductDetailsPage } from "@website/components/pages/productDetails";
import { GetServerSidePropsContext } from "next";
import { addApolloState, initializeApollo } from "@website/libs/apolloClient";

import { QUERY_GET_PRODUCT_BY_ID } from "@website/components/pages/productDetails/gql";

import {
  GetProductByIdPublicProductPageQuery,
  GetProductByIdPublicProductPageQueryVariables,
} from "@website/gql/graphql";

export function Product() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Product Details");
    setPageTitle(TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <ProductDetailsPage />;
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const apolloClient = initializeApollo();

  const { slug } = params;
  await apolloClient.query<
    GetProductByIdPublicProductPageQuery,
    GetProductByIdPublicProductPageQueryVariables
  >({
    query: QUERY_GET_PRODUCT_BY_ID,
    variables: {
      identity: `${slug}`,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default Product;
