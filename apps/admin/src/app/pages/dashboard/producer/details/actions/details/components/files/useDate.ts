import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import {
  AddFileToProducerActionAdminMutation,
  AddFileToProducerActionAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProducerActionDetails } from "@admin/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_FILE_TO_PRODUCER_ACTION } from "./gql";

const useData = () => {
  const {
    getProducerActionLoading,
    producerActionId,
    refetch,
    producerAction,
  } = useProducerActionDetails();
  const { enqueueSnackbar } = useSnackbar();

  const [
    addFileToProducerActionAdmin,
    { loading: updateProducerActionLoading },
  ] = useMutation<
    AddFileToProducerActionAdminMutation,
    AddFileToProducerActionAdminMutationVariables
  >(MUTATION_ADD_FILE_TO_PRODUCER_ACTION, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PRODUCER_ACTION_UPDATE__SUCCESS, {
        variant: "success",
      });
      refetch();
    },
  });

  const onSubmit = (fileId: string) => {
    addFileToProducerActionAdmin({
      variables: {
        addFileToProducerActionAdmin: { fileId, producerActionId },
      },
    });
  };

  return {
    onSubmit,
    producerAction,
    loading: updateProducerActionLoading || getProducerActionLoading,
    refetch,
  };
};

export default useData;
