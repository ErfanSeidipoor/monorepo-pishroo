import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateCategoryAdminMutation,
  UpdateCategoryAdminMutationVariables,
} from "@admin/gql/graphql";
import { useCategoryDetails } from "@admin/hooks";

import { UpdateCategoryAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_CATEGORY_ADMIN } from "./gql";

const useData = () => {
  const { getCategoryLoading, categoryId, category } = useCategoryDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateCategoryAdminInputs>({
    resolver: classValidatorResolver(UpdateCategoryAdminInputs),
    mode: "onChange",
    defaultValues: {
      categoryId,
      name: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (category) {
      const { name, isActive } = category;

      setValue("name", name || "");
      setValue("isActive", !!isActive);
    }
  }, [category, setValue]);

  const [updateCategoryAdmin, { loading: updateCategoryLoading }] = useMutation<
    UpdateCategoryAdminMutation,
    UpdateCategoryAdminMutationVariables
  >(MUTATION_UPDATE_CATEGORY_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_CATEGORY_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateCategoryAdminInputs> = (
    updateCategoryAdminInputs
  ) => {
    updateCategoryAdmin({
      variables: { updateCategoryAdminInputs },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateCategoryLoading || getCategoryLoading,
  };
};

export default useData;
