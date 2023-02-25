import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

import {
  GetProjectByIdAdminQuery,
  GetProjectByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PROJECT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { projectId } = useParams<{ projectId: string }>();

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
