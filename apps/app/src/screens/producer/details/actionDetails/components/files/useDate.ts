import { useMutation } from "@apollo/client";
import { Alert } from "react-native";
import {
  AddFileToProducerActionAdminMutation,
  AddFileToProducerActionAdminMutationVariables,
} from "@app/gql/graphql";
import { useProducerActionDetails } from "@app/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_FILE_TO_PRODUCER_ACTION } from "./gql";

const useData = () => {
  const {
    getProducerActionLoading,
    producerActionId,
    refetch,
    producerAction,
  } = useProducerActionDetails();

  const [
    addFileToProducerActionAdmin,
    { loading: updateProducerActionLoading },
  ] = useMutation<
    AddFileToProducerActionAdminMutation,
    AddFileToProducerActionAdminMutationVariables
  >(MUTATION_ADD_FILE_TO_PRODUCER_ACTION, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: () => {
      Alert.alert(TEXTS.PAGE_PRODUCER_ACTION_UPDATE__SUCCESS);
      refetch();
    },
  });

  const onSubmit = (fileId: string) => {
    addFileToProducerActionAdmin({
      variables: { addFileToProducerActionAdmin: { fileId, producerActionId } },
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
