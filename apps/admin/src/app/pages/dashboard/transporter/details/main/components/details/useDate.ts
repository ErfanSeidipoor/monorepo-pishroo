import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateTransporterAdminMutation,
  UpdateTransporterAdminMutationVariables,
} from "@admin/gql/graphql";
import { useTransporterDetails } from "@admin/hooks";

import { UpdateTransporterAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_TRANSPORTER_ADMIN } from "./gql";

const useData = () => {
  const { getTransporterLoading, transporterId, transporter } =
    useTransporterDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateTransporterAdminInputs>({
    resolver: classValidatorResolver(UpdateTransporterAdminInputs),
    mode: "onChange",
    defaultValues: {
      transporterId,
      name: "",
      phone: "",
      email: "",
      description: "",
      address: "",
      cityId: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (transporter) {
      const { name, phone, email, description, address, isActive, cityId } =
        transporter;

      setValue("name", name || "");
      setValue("phone", phone || "");
      setValue("email", email || "");
      setValue("description", description || "");
      setValue("address", address || "");
      setValue("isActive", !!isActive);
      setValue("cityId", cityId || "");
    }
  }, [transporter, setValue]);

  const [updateTransporterAdmin, { loading: updateTransporterLoading }] =
    useMutation<
      UpdateTransporterAdminMutation,
      UpdateTransporterAdminMutationVariables
    >(MUTATION_UPDATE_TRANSPORTER_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_TRANSPORTER_UPDATE__SUCCESS, {
          variant: "success",
        });
      },
    });

  const onSubmit: SubmitHandler<UpdateTransporterAdminInputs> = (
    updateTransporterAdminInputs
  ) => {
    updateTransporterAdmin({ variables: { updateTransporterAdminInputs } });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateTransporterLoading || getTransporterLoading,
  };
};

export default useData;
