import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { url } from "@pishroo/utils";

import {
  GetProjectsPublicProductPageQuery,
  GetProjectsPublicProductPageQueryVariables,
  PaginationArgsGql,
} from "@website/gql/graphql";

import { PRODUCT_ROUTE } from "@website/constants";
import { QUERY_GET_PROJECTS_PUBLIC } from "./gql";

const useData = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<
    GetProjectsPublicProductPageQuery["getProjectsPublic"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<
      GetProjectsPublicProductPageQuery["getProjectsPublic"]["pageInfo"]
    >();

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: Number(router.query["page"]) || 1,
  });

  const { loading } = useQuery<
    GetProjectsPublicProductPageQuery,
    GetProjectsPublicProductPageQueryVariables
  >(QUERY_GET_PROJECTS_PUBLIC, {
    variables: {
      getProjectsPublicArgs: {},
      paginationArgs: { ...paginationArgs, limit: 30 },
    },
    onError: (error) => {
      // enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProjectsPublic }) => {
      setProjects(getProjectsPublic?.edges);
      setPageInfo(getProjectsPublic?.pageInfo);
    },
  });

  useEffect(() => {
    setPaginationArgs({
      page: Number(router.query["page"]) || 1,
    });
  }, [router]);

  const onPageSelect = (page: number) => {
    router.push(url.generate(PRODUCT_ROUTE, {}, { ...paginationArgs, page }));
  };

  return {
    pageInfo,
    projects,
    loading,
    paginationArgs,
    onPageSelect,
  };
};

export default useData;
