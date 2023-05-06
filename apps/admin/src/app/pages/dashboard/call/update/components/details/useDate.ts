import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateCallAdminMutation,
  UpdateCallAdminMutationVariables,
} from "@admin/gql/graphql";
import { useCallDetails } from "@admin/hooks";

import { UpdateCallAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_CALL_ADMIN } from "./gql";

const useData = () => {
  const { getCallLoading, callId, call } = useCallDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateCallAdminInputs>({
    resolver: classValidatorResolver(UpdateCallAdminInputs),
    mode: "onChange",
    defaultValues: {
      callId,
      newPhone: "",
      description: "",
    },
  });

  useEffect(() => {
    if (call) {
      const { newPhone, description } = call;

      setValue("newPhone", newPhone || "");
      setValue("description", description || "");
    }
  }, [call, setValue]);

  const [updateCallAdmin, { loading: updateCallLoading }] = useMutation<
    UpdateCallAdminMutation,
    UpdateCallAdminMutationVariables
  >(MUTATION_UPDATE_CALL_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_CALL_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateCallAdminInputs> = (
    updateCallAdminInputs
  ) => {
    updateCallAdmin({
      variables: { updateCallAdminInputs },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    call,
    loading: updateCallLoading || getCallLoading,
  };
};

export default useData;
