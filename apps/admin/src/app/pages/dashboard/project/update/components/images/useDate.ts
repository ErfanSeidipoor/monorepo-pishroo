import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import {
  AddImageToProjectAdminMutation,
  AddImageToProjectAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProjectDetails } from "@admin/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_IMAGE_TO_PROJECT } from "./gql";

const useData = () => {
  const { getProjectLoading, projectId, refetch, project } =
    useProjectDetails();
  const { enqueueSnackbar } = useSnackbar();

  const [addImageToProjectAdmin, { loading: updateProjectLoading }] =
    useMutation<
      AddImageToProjectAdminMutation,
      AddImageToProjectAdminMutationVariables
    >(MUTATION_ADD_IMAGE_TO_PROJECT, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_PROJECT_UPDATE__SUCCESS, {
          variant: "success",
        });
        refetch();
      },
    });

  const onSubmit = (fileId: string) => {
    addImageToProjectAdmin({
      variables: { addImageToProjectAdminInputs: { fileId, projectId } },
    });
  };

  return {
    onSubmit,
    project,
    loading: updateProjectLoading || getProjectLoading,
    refetch,
  };
};

export default useData;
