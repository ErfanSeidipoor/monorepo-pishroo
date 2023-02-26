import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateMessageAdminMutation,
  UpdateMessageAdminMutationVariables,
} from "@admin/gql/graphql";
import { useMessageDetails } from "@admin/hooks";

import { UpdateMessageAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_MESSAGE_ADMIN } from "./gql";

const useData = () => {
  const { getMessageLoading, messageId, message } = useMessageDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateMessageAdminInputs>({
    resolver: classValidatorResolver(UpdateMessageAdminInputs),
    mode: "onChange",
    defaultValues: {
      messageId,
      text: "",
      customerIds: [],
      userId: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (message) {
      const { text, isActive, userId, customerMessages } = message;

      const customerIds = customerMessages.map(({ customer }) => customer.id);

      setValue("text", text || "");
      setValue("userId", userId || "");
      setValue("customerIds", customerIds || []);
      setValue("isActive", !!isActive);
    }
  }, [message, setValue]);

  const [updateMessageAdmin, { loading: updateMessageLoading }] = useMutation<
    UpdateMessageAdminMutation,
    UpdateMessageAdminMutationVariables
  >(MUTATION_UPDATE_MESSAGE_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_MESSAGE_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateMessageAdminInputs> = (
    updateMessageAdminInputs
  ) => {
    updateMessageAdmin({
      variables: { updateMessageAdminInputs },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateMessageLoading || getMessageLoading,
  };
};

export default useData;
