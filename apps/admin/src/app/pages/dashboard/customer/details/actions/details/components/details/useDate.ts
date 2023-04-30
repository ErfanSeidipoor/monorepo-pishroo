import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateCustomerActionAdminInputsMutation,
  UpdateCustomerActionAdminInputsMutationVariables,
} from "@admin/gql/graphql";
import { useCustomerDetails, useCustomerActionDetails } from "@admin/hooks";

import { UpdateCustomerActionAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_CUSTOMER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const { getCustomerActionLoading, customerActionId, customerAction } =
    useCustomerActionDetails();

  const { customerId } = useCustomerDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateCustomerActionAdminInputs>({
    resolver: classValidatorResolver(UpdateCustomerActionAdminInputs),
    mode: "onChange",
    defaultValues: {
      customerActionId,
      text: "",
    },
  });

  useEffect(() => {
    if (customerAction) {
      const { text } = customerAction;
      setValue("text", text || "");
    }
  }, [customerId, customerAction, setValue]);

  const [updateCustomerActionAdmin, { loading: updateCustomerActionLoading }] =
    useMutation<
      UpdateCustomerActionAdminInputsMutation,
      UpdateCustomerActionAdminInputsMutationVariables
    >(MUTATION_UPDATE_CUSTOMER_ACTION_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_CUSTOMER_ACTION_UPDATE__SUCCESS, {
          variant: "success",
        });
      },
    });

  const onSubmit: SubmitHandler<UpdateCustomerActionAdminInputs> = (
    updateCustomerActionAdminInputs
  ) => {
    updateCustomerActionAdmin({
      variables: {
        updateCustomerActionAdminInputs,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateCustomerActionLoading || getCustomerActionLoading,
  };
};

export default useData;
