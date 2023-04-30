import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import {
  AddFileToCustomerActionAdminMutation,
  AddFileToCustomerActionAdminMutationVariables,
} from "@admin/gql/graphql";
import { useCustomerActionDetails } from "@admin/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_FILE_TO_CUSTOMER_ACTION } from "./gql";

const useData = () => {
  const {
    getCustomerActionLoading,
    customerActionId,
    refetch,
    customerAction,
  } = useCustomerActionDetails();
  const { enqueueSnackbar } = useSnackbar();

  const [
    addFileToCustomerActionAdmin,
    { loading: updateCustomerActionLoading },
  ] = useMutation<
    AddFileToCustomerActionAdminMutation,
    AddFileToCustomerActionAdminMutationVariables
  >(MUTATION_ADD_FILE_TO_CUSTOMER_ACTION, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_CUSTOMER_ACTION_UPDATE__SUCCESS, {
        variant: "success",
      });
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
