import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PROVINCE_DETAILS,
  DASHBOARD_PROVINCE_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateProvinceAdminMutation,
  CreateProvinceAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateProvinceAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PROVINCE_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateProvinceAdminInputs>({
    resolver: classValidatorResolver(CreateProvinceAdminInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROVINCE__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROVINCE__PROVINCE,
            href: DASHBOARD_PROVINCE_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_PROVINCE__NEW_PROVINCE },
        ],
      },
    });
  }, [setConfig]);

  const [createProvinceAdmin, { loading }] = useMutation<
    CreateProvinceAdminMutation,
    CreateProvinceAdminMutationVariables
  >(MUTATION_CREATE_PROVINCE_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createProvinceAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PROVINCE__SUCCESS, { variant: "success" });
      navigate(url.generate(DASHBOARD_PROVINCE_DETAILS, { provinceId: id }));
    },
  });

  const onSubmit: SubmitHandler<CreateProvinceAdminInputs> = (
    createProvinceAdminInputs
  ) => {
    createProvinceAdmin({ variables: { createProvinceAdminInputs } });
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
