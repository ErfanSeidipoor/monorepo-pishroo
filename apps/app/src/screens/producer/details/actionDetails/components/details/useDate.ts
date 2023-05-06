import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Alert } from "react-native";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProducerActionAdminInputsMutation,
  UpdateProducerActionAdminInputsMutationVariables,
} from "@app/gql/graphql";
import { useProducerDetails, useProducerActionDetails } from "@app/hooks";

import { UpdateProducerActionAdminInputs } from "libs/dto/src/admin/producerAction/update-producer-action.inputs";
import TEXTS from "libs/texts/src";

import { MUTATION_UPDATE_PRODUCER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const { getProducerActionLoading, producerActionId, producerAction } =
    useProducerActionDetails();

  const { producerId } = useProducerDetails();
  // const { enqueueSnackbar } = useSnackbar();

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

  const [updateProducerActionAdmin, { loading: updateProducerActionLoading }] =
    useMutation<
      UpdateProducerActionAdminInputsMutation,
      UpdateProducerActionAdminInputsMutationVariables
    >(MUTATION_UPDATE_PRODUCER_ACTION_ADMIN, {
      onError: (error) => {
        Alert.alert(error.message);
      },
      onCompleted: () => {
        Alert.alert(TEXTS.PAGE_PRODUCER_ACTION_UPDATE__SUCCESS);
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
