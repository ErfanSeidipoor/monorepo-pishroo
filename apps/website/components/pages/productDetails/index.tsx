import { useQuery } from "@apollo/client";
import { FC } from "react";
import { useRouter } from "next/router";

import {
  General,
  Products,
  Description,
  Properties,
  Reviews,
  Projects,
  More,
} from "./components";
import {
  GetProductByIdPublicProductPageQuery,
  GetProductByIdPublicProductPageQueryVariables,
} from "@website/gql/graphql";
import { QUERY_GET_PRODUCT_BY_ID } from "../productDetails/gql";

export const ProductDetailsPage: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error } = useQuery<
    GetProductByIdPublicProductPageQuery,
    GetProductByIdPublicProductPageQueryVariables
  >(QUERY_GET_PRODUCT_BY_ID, {
    variables: {
      identity: `${slug}`,
    },
  });

  console.log({ error, data });

  return (
    <>
      <General data={data} />
      <Description data={data} />
      <Properties data={data} />
      <Reviews data={data} />
      <Projects data={data} />
      <Products data={data} />
      <More />
    </>
  );
};
