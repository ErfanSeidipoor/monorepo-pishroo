import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateTransporterAgentAdminMutation,
  UpdateTransporterAgentAdminMutationVariables,
} from "@admin/gql/graphql";
import { useTransporterAgentDetails } from "@admin/hooks";

import { UpdateTransporterAgentAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_TRANSPORTER_AGENT_ADMIN } from "./gql";

const useData = () => {
  const { getTransporterAgentLoading, transporterAgentId, transporterAgent } =
    useTransporterAgentDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateTransporterAgentAdminInputs>({
    resolver: classValidatorResolver(UpdateTransporterAgentAdminInputs),
    mode: "onChange",
    defaultValues: {
      transporterAgentId,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (transporterAgent) {
      const { firstName, lastName, phone, email, description, isActive } =
        transporterAgent;

      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("phone", phone || "");
      setValue("email", email || "");
      setValue("description", description || "");
      setValue("isActive", !!isActive);
    }
  }, [transporterAgent, setValue]);

  const [
    updateTransporterAgentAdmin,
    { loading: updateTransporterAgentLoading },
  ] = useMutation<
    UpdateTransporterAgentAdminMutation,
    UpdateTransporterAgentAdminMutationVariables
  >(MUTATION_UPDATE_TRANSPORTER_AGENT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_TRANSPORTER_AGENT_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateTransporterAgentAdminInputs> = (
    updateTransporterAgentAdminInputs
  ) => {
    updateTransporterAgentAdmin({
      variables: { updateTransporterAgentAdminInputs },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateTransporterAgentLoading || getTransporterAgentLoading,
  };
};

export default useData;
