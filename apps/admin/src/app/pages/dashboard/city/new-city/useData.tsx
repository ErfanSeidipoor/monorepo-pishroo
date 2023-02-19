import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_CITY_DETAILS,
  DASHBOARD_CITY_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateCityAdminMutation,
  CreateCityAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateCityAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_CITY_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateCityAdminInputs>({
    resolver: classValidatorResolver(CreateCityAdminInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CITY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CITY__CITY,
            href: DASHBOARD_CITY_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_CITY__NEW_CITY },
        ],
      },
    });
  }, [setConfig]);

  const [createCityAdmin, { loading }] = useMutation<
    CreateCityAdminMutation,
    CreateCityAdminMutationVariables
  >(MUTATION_CREATE_CITY_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createCityAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_CITY__SUCCESS, { variant: "success" });
      navigate(url.generate(DASHBOARD_CITY_DETAILS, { cityId: id }));
    },
  });

  const onSubmit: SubmitHandler<CreateCityAdminInputs> = (
    createCityAdminInputs
  ) => {
    createCityAdmin({ variables: { createCityAdminInputs } });
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
