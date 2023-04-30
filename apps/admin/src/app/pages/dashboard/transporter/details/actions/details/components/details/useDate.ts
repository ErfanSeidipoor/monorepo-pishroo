import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateTransporterActionAdminInputsMutation,
  UpdateTransporterActionAdminInputsMutationVariables,
} from "@admin/gql/graphql";
import {
  useTransporterDetails,
  useTransporterActionDetails,
} from "@admin/hooks";

import { UpdateTransporterActionAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_TRANSPORTER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const {
    getTransporterActionLoading,
    transporterActionId,
    transporterAction,
  } = useTransporterActionDetails();

  const { transporterId } = useTransporterDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateTransporterActionAdminInputs>({
    resolver: classValidatorResolver(UpdateTransporterActionAdminInputs),
    mode: "onChange",
    defaultValues: {
      transporterActionId,
      text: "",
    },
  });

  useEffect(() => {
    if (transporterAction) {
      const { text } = transporterAction;
      setValue("text", text || "");
    }
  }, [transporterId, transporterAction, setValue]);

  const [
    updateTransporterActionAdmin,
    { loading: updateTransporterActionLoading },
  ] = useMutation<
    UpdateTransporterActionAdminInputsMutation,
    UpdateTransporterActionAdminInputsMutationVariables
  >(MUTATION_UPDATE_TRANSPORTER_ACTION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_TRANSPORTER_ACTION_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateTransporterActionAdminInputs> = (
    updateTransporterActionAdminInputs
  ) => {
    updateTransporterActionAdmin({
      variables: {
        updateTransporterActionAdminInputs,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateTransporterActionLoading || getTransporterActionLoading,
  };
};

export default useData;
