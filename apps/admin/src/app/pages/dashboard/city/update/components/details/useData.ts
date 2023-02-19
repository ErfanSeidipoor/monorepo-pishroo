import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateCityAdminMutation,
  UpdateCityAdminMutationVariables,
} from "@admin/gql/graphql";
import { useCityDetails } from "@admin/hooks";

import { UpdateCityAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_CITY_ADMIN } from "./gql";

const useData = () => {
  const { getCityLoading, cityId, city } = useCityDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateCityAdminInputs>({
    resolver: classValidatorResolver(UpdateCityAdminInputs),
    mode: "onChange",
    defaultValues: {
      cityId,
      name: "",
    },
  });

  useEffect(() => {
    if (city) {
      const { name, provinceId } = city;
      setValue("name", name);
      setValue("provinceId", provinceId);
    }
  }, [city, setValue]);

  const [updateCityAdmin, { loading: updateCityLoading }] = useMutation<
    UpdateCityAdminMutation,
    UpdateCityAdminMutationVariables
  >(MUTATION_UPDATE_CITY_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_CITY_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateCityAdminInputs> = (
    updateCityAdminInputs
  ) => {
    updateCityAdmin({ variables: { updateCityAdminInputs } });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateCityLoading || getCityLoading,
  };
};

export default useData;
