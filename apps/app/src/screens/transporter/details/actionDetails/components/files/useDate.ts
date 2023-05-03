import { useMutation } from "@apollo/client";
import { Alert } from "react-native";
import {
  AddFileToTransporterActionAdminMutation,
  AddFileToTransporterActionAdminMutationVariables,
} from "@app/gql/graphql";
import { useTransporterActionDetails } from "@app/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_FILE_TO_TRANSPORTER_ACTION } from "./gql";

const useData = () => {
  const {
    getTransporterActionLoading,
    transporterActionId,
    refetch,
    transporterAction,
  } = useTransporterActionDetails();

  const [
    addFileToTransporterActionAdmin,
    { loading: updateTransporterActionLoading },
  ] = useMutation<
    AddFileToTransporterActionAdminMutation,
    AddFileToTransporterActionAdminMutationVariables
  >(MUTATION_ADD_FILE_TO_TRANSPORTER_ACTION, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: () => {
      Alert.alert(TEXTS.PAGE_TRANSPORTER_ACTION_UPDATE__SUCCESS);
      refetch();
    },
  });

  const onSubmit = (fileId: string) => {
    addFileToTransporterActionAdmin({
      variables: { addFileToTransporterActionAdmin: { fileId, transporterActionId } },
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
