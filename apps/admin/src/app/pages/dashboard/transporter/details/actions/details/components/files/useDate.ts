import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import {
  AddFileToTransporterActionAdminMutation,
  AddFileToTransporterActionAdminMutationVariables,
} from "@admin/gql/graphql";
import { useTransporterActionDetails } from "@admin/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_FILE_TO_TRANSPORTER_ACTION } from "./gql";

const useData = () => {
  const {
    getTransporterActionLoading,
    transporterActionId,
    refetch,
    transporterAction,
  } = useTransporterActionDetails();
  const { enqueueSnackbar } = useSnackbar();

  const [
    addFileToTransporterActionAdmin,
    { loading: updateTransporterActionLoading },
  ] = useMutation<
    AddFileToTransporterActionAdminMutation,
    AddFileToTransporterActionAdminMutationVariables
  >(MUTATION_ADD_FILE_TO_TRANSPORTER_ACTION, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_TRANSPORTER_ACTION_UPDATE__SUCCESS, {
        variant: "success",
      });
      refetch();
    },
  });

  const onSubmit = (fileId: string) => {
    addFileToTransporterActionAdmin({
      variables: {
        addFileToTransporterActionAdmin: { fileId, transporterActionId },
      },
    });
  };

  return {
    onSubmit,
    transporterAction,
    loading: updateTransporterActionLoading || getTransporterActionLoading,
    refetch,
  };
};

export default useData;
