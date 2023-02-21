import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PRODUCER_DETAILS,
  DASHBOARD_PRODUCER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateProducerAdminMutation,
  CreateProducerAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateProducerAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PRODUCER_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateProducerAdminInputs>({
    resolver: classValidatorResolver(CreateProducerAdminInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      description: "",
      address: "",
      cityId: "",
      isActive: true,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCER__PRODUCER,
            href: DASHBOARD_PRODUCER_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_PRODUCER__NEW_PRODUCER },
        ],
      },
    });
  }, [setConfig]);

  const [createProducerAdmin, { loading }] = useMutation<
    CreateProducerAdminMutation,
    CreateProducerAdminMutationVariables
  >(MUTATION_CREATE_PRODUCER_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createProducerAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PRODUCER__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_PRODUCER_DETAILS, { producerId: id })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateProducerAdminInputs> = (
    createProducerAdminInputs
  ) => {
    createProducerAdmin({ variables: { createProducerAdminInputs } });
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
