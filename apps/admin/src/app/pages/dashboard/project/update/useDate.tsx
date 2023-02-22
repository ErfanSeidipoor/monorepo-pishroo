import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import { DASHBOARD_PROJECT_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetProjectByIdAdminQuery,
  GetProjectByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PROJECT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROJECT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROJECT__PROJECT,
            href: DASHBOARD_PROJECT_ROUTE,
          },
          { label: TEXTS.PAGE_PROJECT_UPDATE__UPDATE_PROJECT },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getProjectLoading,
    data: project,
    refetch,
  } = useQuery<GetProjectByIdAdminQuery, GetProjectByIdAdminQueryVariables>(
    QUERY_GET_PROJECT_BY_ID_ADMIN,
    {
      variables: {
        projectId: projectId!,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
    }
  );

  return {
    project: project?.getProjectByIdAdmin,
    getProjectLoading,
    projectId: projectId!,
    refetch,
  };
};

export default useData;
