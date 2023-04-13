import { useLayout } from "@website/hooks";
import { GetServerSidePropsContext } from "next";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { ProjectDetailsPage } from "@website/components/pages/projectDetails";
import { addApolloState, initializeApollo } from "@website/libs/apolloClient";

import { QUERY_GET_PROJECT_BY_ID } from "@website/components/pages/projectDetails/gql";

import {
  GetProjectByIdPublicProjectPageQuery,
  GetProjectByIdPublicProjectPageQueryVariables,
} from "@website/gql/graphql";

export function Project() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Project Details");
    setPageTitle(TEXTS.WEBSITE_PAGE__PROJECT_DETAILS__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <ProjectDetailsPage />;
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const apolloClient = initializeApollo();

  const { slug } = params;
  await apolloClient.query<
    GetProjectByIdPublicProjectPageQuery,
    GetProjectByIdPublicProjectPageQueryVariables
  >({
    query: QUERY_GET_PROJECT_BY_ID,
    variables: {
      identity: `${slug}`,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default Project;
