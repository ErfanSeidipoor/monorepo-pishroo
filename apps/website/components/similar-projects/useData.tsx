import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import { url } from "@pishroo/utils";

import {
  GetProjectsPublicSimilarProjectsQuery,
  GetProjectsPublicSimilarProjectsQueryVariables,
} from "@website/gql/graphql";

import { PROJECT_DETAILS_ROUTE } from "@website/constants";
import { GET_PROJECTS_PUBLIC_SIMILAR_PROJECTS } from "./gql";

const useData = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<
    GetProjectsPublicSimilarProjectsQuery["getProjectsPublic"]["edges"]
  >([]);

  const { loading } = useQuery<
    GetProjectsPublicSimilarProjectsQuery,
    GetProjectsPublicSimilarProjectsQueryVariables
  >(GET_PROJECTS_PUBLIC_SIMILAR_PROJECTS, {
    variables: {
      getProjectsPublicArgs: { orderRandom: true },
    },
    onError: (error) => {},
    onCompleted: ({ getProjectsPublic }) => {
      setProjects(getProjectsPublic?.edges);
    },
  });

  const onClickProject = (slugProject: string) => {
    router.push(url.generate(PROJECT_DETAILS_ROUTE, { slugProject }, {}));
  };

  return {
    onClickProject,
    projects,
    loading,
  };
};

export default useData;
