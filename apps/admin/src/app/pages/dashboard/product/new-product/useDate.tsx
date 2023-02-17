import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateProductAdminMutation,
  CreateProductAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateProductAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PRODUCT_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateProductAdminInputs>({
    resolver: classValidatorResolver(CreateProductAdminInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
      slug: "",
      text: "",
      isActive: false,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCT__PRODUCT,
            href: DASHBOARD_PRODUCT_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_PRODUCT__NEW_PRODUCT },
        ],
      },
    });
  }, [setConfig]);

  const [createProductAdmin, { loading }] = useMutation<
    CreateProductAdminMutation,
    CreateProductAdminMutationVariables
  >(MUTATION_CREATE_PRODUCT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createProductAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PRODUCT__SUCCESS, { variant: "success" });
      navigate(url.generate(DASHBOARD_PRODUCT_DETAILS, { productId: id }));
    },
  });

  const onSubmit: SubmitHandler<CreateProductAdminInputs> = (
    createProductAdminInputs
  ) => {
    createProductAdmin({ variables: { createProductAdminInputs } });
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
