import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateUserProvincesAdminMutation,
  UpdateUserProvincesAdminMutationVariables,
} from "@admin/gql/graphql";

import { useUserDetails } from "@admin/hooks";

import { UpdateUserProvincesAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_USER_PROVINCES_ADMIN } from "./gql";

const useData = () => {
  const { getUserLoading, userId, user } = useUserDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateUserProvincesAdminInputs>({
    resolver: classValidatorResolver(UpdateUserProvincesAdminInputs),
    mode: "onChange",
    defaultValues: {
      userId,
      provinceIds: [],
    },
  });

  useEffect(() => {
    if (user) {
      const { provinceUsers } = user;
      const provinceIds = provinceUsers?.map(({ provinceId }) => provinceId);
      setValue("provinceIds", provinceIds || []);
    }
  }, [user, setValue]);

  const [addColorsToUser, { loading: updateUserLoading }] = useMutation<
    UpdateUserProvincesAdminMutation,
    UpdateUserProvincesAdminMutationVariables
  >(MUTATION_UPDATE_USER_PROVINCES_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PRODUCT_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateUserProvincesAdminInputs> = (
    updateUserProvincesAdminInputs
  ) => {
    addColorsToUser({
      variables: { updateUserProvincesAdminInputs },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateUserLoading || getUserLoading,
  };
};

export default useData;
