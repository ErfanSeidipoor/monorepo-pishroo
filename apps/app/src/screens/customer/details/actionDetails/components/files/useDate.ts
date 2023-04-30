import { useMutation } from "@apollo/client";
import { Alert } from "react-native";
import {
  AddFileToCustomerActionAdminMutation,
  AddFileToCustomerActionAdminMutationVariables,
} from "@app/gql/graphql";
import { useCustomerActionDetails } from "@app/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_FILE_TO_CUSTOMER_ACTION } from "./gql";

const useData = () => {
  const {
    getCustomerActionLoading,
    customerActionId,
    refetch,
    customerAction,
  } = useCustomerActionDetails();

  const [
    addFileToCustomerActionAdmin,
    { loading: updateCustomerActionLoading },
  ] = useMutation<
    AddFileToCustomerActionAdminMutation,
    AddFileToCustomerActionAdminMutationVariables
  >(MUTATION_ADD_FILE_TO_CUSTOMER_ACTION, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: () => {
      Alert.alert(TEXTS.PAGE_CUSTOMER_ACTION_UPDATE__SUCCESS);
      refetch();
    },
  });

  const onSubmit = (fileId: string) => {
    addFileToCustomerActionAdmin({
      variables: { addFileToCustomerActionAdmin: { fileId, customerActionId } },
    });
  };

  return {
    onSubmit,
    customerAction,
    loading: updateCustomerActionLoading || getCustomerActionLoading,
    refetch,
  };
};

export default useData;
