import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_CATEGORY_DETAILS,
  DASHBOARD_CATEGORY_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateCategoryAdminMutation,
  CreateCategoryAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateCategoryAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_CATEGORY_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateCategoryAdminInputs>({
    resolver: classValidatorResolver(CreateCategoryAdminInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
      isActive: true,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CATEGORY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CATEGORY__CATEGORY,
            href: DASHBOARD_CATEGORY_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_CATEGORY__NEW_CATEGORY },
        ],
      },
    });
  }, [setConfig]);

  const [createCategoryAdmin, { loading }] = useMutation<
    CreateCategoryAdminMutation,
    CreateCategoryAdminMutationVariables
  >(MUTATION_CREATE_CATEGORY_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createCategoryAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_CATEGORY__SUCCESS, {
        variant: "success",
      });

      navigate(
        url.generate(DASHBOARD_CATEGORY_DETAILS, {
          categoryId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateCategoryAdminInputs> = (
    createCategoryAdminInputs
  ) => {
    createCategoryAdmin({
      variables: { createCategoryAdminInputs },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading,
  };
};

export default useData;
