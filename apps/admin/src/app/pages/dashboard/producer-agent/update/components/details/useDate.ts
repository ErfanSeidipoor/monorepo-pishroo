import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProducerAgentAdminMutation,
  UpdateProducerAgentAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProducerAgentDetails } from "@admin/hooks";

import { UpdateProducerAgentAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PRODUCER_AGENT_ADMIN } from "./gql";

const useData = () => {
  const { getProducerAgentLoading, producerAgentId, producerAgent } =
    useProducerAgentDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateProducerAgentAdminInputs>({
    resolver: classValidatorResolver(UpdateProducerAgentAdminInputs),
    mode: "onChange",
    defaultValues: {
      producerAgentId,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (producerAgent) {
      const { firstName, lastName, phone, email, description, isActive } =
        producerAgent;

      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("phone", phone || "");
      setValue("email", email || "");
      setValue("description", description || "");
      setValue("isActive", !!isActive);
    }
  }, [producerAgent, setValue]);

  const [updateProducerAgentAdmin, { loading: updateProducerAgentLoading }] =
    useMutation<
      UpdateProducerAgentAdminMutation,
      UpdateProducerAgentAdminMutationVariables
    >(MUTATION_UPDATE_PRODUCER_AGENT_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_PRODUCER_AGENT_UPDATE__SUCCESS, {
          variant: "success",
        });
      },
    });

  const onSubmit: SubmitHandler<UpdateProducerAgentAdminInputs> = (
    updateProducerAgentAdminInputs
  ) => {
    updateProducerAgentAdmin({
      variables: { updateProducerAgentAdminInputs },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProducerAgentLoading || getProducerAgentLoading,
  };
};

export default useData;
