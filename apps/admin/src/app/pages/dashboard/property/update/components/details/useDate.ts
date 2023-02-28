import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdatePropertyAdminInputsGql,
  UpdatePropertyAdminMutation,
  UpdatePropertyAdminMutationVariables,
} from "@admin/gql/graphql";
import { usePropertyDetails } from "@admin/hooks";

import { UpdatePropertyAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PROPERTY_ADMIN } from "./gql";

const useData = () => {
  const { getPropertyLoading, propertyId, property } = usePropertyDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdatePropertyAdminInputs>({
    resolver: classValidatorResolver(UpdatePropertyAdminInputs),
    mode: "onChange",
    defaultValues: {
      propertyId,
      name: "",
      unit: undefined,
      isActive: false,
    },
  });

  useEffect(() => {
    if (property) {
      const { name, isActive, unit } = property;
      setValue("name", name || "");
      setValue("isActive", !!isActive);
      setValue("unit", unit as any);
    }
  }, [property, setValue]);

  const [updatePropertyAdmin, { loading: updatePropertyLoading }] = useMutation<
    UpdatePropertyAdminMutation,
    UpdatePropertyAdminMutationVariables
  >(MUTATION_UPDATE_PROPERTY_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PROPERTY_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdatePropertyAdminInputs> = (
    updatePropertyAdminInputs
  ) => {
    updatePropertyAdmin({
      variables: {
        updatePropertyAdminInputs:
          updatePropertyAdminInputs as unknown as UpdatePropertyAdminInputsGql,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updatePropertyLoading || getPropertyLoading,
  };
};

export default useData;
