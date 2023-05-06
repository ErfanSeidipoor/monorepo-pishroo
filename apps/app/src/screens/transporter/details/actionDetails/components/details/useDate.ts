import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Alert } from "react-native";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateTransporterActionAdminInputsMutation,
  UpdateTransporterActionAdminInputsMutationVariables,
} from "@app/gql/graphql";
import { useTransporterDetails, useTransporterActionDetails } from "@app/hooks";

import { UpdateTransporterActionAdminInputs } from "libs/dto/src/admin/transporterAction/update-transporter-action.inputs";
import TEXTS from "libs/texts/src";

import { MUTATION_UPDATE_TRANSPORTER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const {
    getTransporterActionLoading,
    transporterActionId,
    transporterAction,
  } = useTransporterActionDetails();

  const { transporterId } = useTransporterDetails();
  // const { enqueueSnackbar } = useSnackbar();

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
      Alert.alert(error.message);
    },
    onCompleted: () => {
      Alert.alert(TEXTS.PAGE_TRANSPORTER_ACTION_UPDATE__SUCCESS);
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
