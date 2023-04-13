import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout, useProjectDetails } from "@admin/hooks";
import {
  DASHBOARD_PROJECT_DETAILS,
  DASHBOARD_PROJECT_REVIEW_ROUTE,
  DASHBOARD_PROJECT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProjectReviewByIdAdminQuery,
  GetProjectReviewByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { url } from "@pishroo/utils";

import { QUERY_GET_PROJECT_REVIEW_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { projectId, project } = useProjectDetails();
  const { enqueueSnackbar } = useSnackbar();
  const { projectReviewId } = useParams<{ projectReviewId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROJECT_REVIEW__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROJECT__PROJECT,
            href: DASHBOARD_PROJECT_ROUTE,
          },
          {
            label: project
              ? project?.name
              : TEXTS.PAGE_PROJECT_UPDATE__UPDATE_PROJECT,
            href: project
              ? url.generate(DASHBOARD_PROJECT_DETAILS, {
                  projectId: project?.id,
                })
              : DASHBOARD_PROJECT_ROUTE,
          },
          {
            label: TEXTS.PAGE_PROJECT_REVIEW__PROJECT_REVIEW,
            href: url.generate(DASHBOARD_PROJECT_REVIEW_ROUTE, { projectId }),
          },
          { label: TEXTS.PAGE_PROJECT_REVIEW_UPDATE__UPDATE_PROJECT_REVIEW },
        ],
      },
    });
  }, [setConfig, project, projectId]);

  const {
    loading: getProjectReviewLoading,
    data: projectReview,
    refetch,
  } = useQuery<
    GetProjectReviewByIdAdminQuery,
    GetProjectReviewByIdAdminQueryVariables
  >(QUERY_GET_PROJECT_REVIEW_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      projectReviewId: projectReviewId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    projectReview: projectReview?.getProjectReviewByIdAdmin,
    getProjectReviewLoading,
    projectReviewId: projectReviewId!,
    refetch,
  };
};

export default useData;
