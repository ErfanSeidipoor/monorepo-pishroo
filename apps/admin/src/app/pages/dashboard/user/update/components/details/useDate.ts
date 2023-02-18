import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateUserAdminInputsGql,
  UpdateUserAdminMutation,
  UpdateUserAdminMutationVariables,
} from "@admin/gql/graphql";
import { useUserDetails } from "@admin/hooks";

import { UpdateUserAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_USER_ADMIN } from "./gql";

const useData = () => {
  const { getUserLoading, userId, user } = useUserDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateUserAdminInputs>({
    resolver: classValidatorResolver(UpdateUserAdminInputs),
    mode: "onChange",
    defaultValues: {
      userId,
      username: "",
      phone: "",
      email: "",
      firstName: "",
      lastName: "",
      roles: [],
    },
  });

  useEffect(() => {
    if (user) {
      const { roles, username, email, firstName, lastName, phone } = user;
      setValue("username", username || "");
      setValue("phone", phone || "");
      setValue("email", email || "");
      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("roles", roles as []);
    }
  }, [user, setValue]);

  const [updateUserAdmin, { loading: updateUserLoading }] = useMutation<
    UpdateUserAdminMutation,
    UpdateUserAdminMutationVariables
  >(MUTATION_UPDATE_USER_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PRODUCT_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateUserAdminInputs> = (
    updateUserAdminInputs
  ) => {
    updateUserAdmin({
      variables: {
        updateUserAdminInputs:
          updateUserAdminInputs as unknown as UpdateUserAdminInputsGql,
      },
    });
  };

  console.log({
    getUserLoading,
    updateUserLoading,
    loading: updateUserLoading || getUserLoading,
    isValid,
    errors,
  });

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
