import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProvinceAdminMutation,
  UpdateProvinceAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProvinceDetails } from "@admin/hooks";

import { UpdateProvinceAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PROVINCE_ADMIN } from "./gql";

const useData = () => {
  const { getProvinceLoading, provinceId, province } = useProvinceDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateProvinceAdminInputs>({
    resolver: classValidatorResolver(UpdateProvinceAdminInputs),
    mode: "onChange",
    defaultValues: {
      provinceId,
      name: "",
    },
  });

  useEffect(() => {
    if (province) {
      const { name } = province;
      setValue("name", name);
    }
  }, [province, setValue]);

  const [updateProvinceAdmin, { loading: updateProvinceLoading }] = useMutation<
    UpdateProvinceAdminMutation,
    UpdateProvinceAdminMutationVariables
  >(MUTATION_UPDATE_PROVINCE_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PROVINCE_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateProvinceAdminInputs> = (
    updateProvinceAdminInputs
  ) => {
    updateProvinceAdmin({ variables: { updateProvinceAdminInputs } });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProvinceLoading || getProvinceLoading,
  };
};

export default useData;
