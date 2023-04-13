import { FC } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import {
  General,
  Products,
  Description,
  Reviews,
  Projects,
  More,
} from "./components";
import {
  GetProjectByIdPublicProjectPageQuery,
  GetProjectByIdPublicProjectPageQueryVariables,
} from "@website/gql/graphql";
import { QUERY_GET_PROJECT_BY_ID } from "../projectDetails/gql";

export const ProjectDetailsPage: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error } = useQuery<
    GetProjectByIdPublicProjectPageQuery,
    GetProjectByIdPublicProjectPageQueryVariables
  >(QUERY_GET_PROJECT_BY_ID, {
    variables: {
      identity: `${slug}`,
    },
  });

  return (
    <>
      <General data={data} />
      <Description data={data} />
      <Reviews data={data} />
      <Projects data={data} />
      <Products data={data} />
      <More />
    </>
  );
};
