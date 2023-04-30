import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProducerActionAdminInputsMutation,
  UpdateProducerActionAdminInputsMutationVariables,
} from "@admin/gql/graphql";
import {
  useProducerDetails,
  useProducerActionDetails,
} from "@admin/hooks";

import { UpdateProducerActionAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PRODUCER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const {
    getProducerActionLoading,
    producerActionId,
    producerAction,
  } = useProducerActionDetails();

  const { producerId } = useProducerDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateProducerActionAdminInputs>({
    resolver: classValidatorResolver(UpdateProducerActionAdminInputs),
    mode: "onChange",
    defaultValues: {
      producerActionId,
      text: "",
    },
  });

  useEffect(() => {
    if (producerAction) {
      const { text } = producerAction;
      setValue("text", text || "");
    }
  }, [producerId, producerAction, setValue]);

  const [
    updateProducerActionAdmin,
    { loading: updateProducerActionLoading },
  ] = useMutation<
    UpdateProducerActionAdminInputsMutation,
    UpdateProducerActionAdminInputsMutationVariables
  >(MUTATION_UPDATE_PRODUCER_ACTION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PRODUCER_ACTION_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateProducerActionAdminInputs> = (
    updateProducerActionAdminInputs
  ) => {
    updateProducerActionAdmin({
      variables: {
        updateProducerActionAdminInputs,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProducerActionLoading || getProducerActionLoading,
  };
};

export default useData;
