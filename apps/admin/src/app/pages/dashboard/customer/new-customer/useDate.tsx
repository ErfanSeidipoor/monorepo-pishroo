import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_CUSTOMER_DETAILS,
  DASHBOARD_CUSTOMER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateCustomerAdminMutation,
  CreateCustomerAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateCustomerAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_CUSTOMER_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateCustomerAdminInputs>({
    resolver: classValidatorResolver(CreateCustomerAdminInputs),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      phone: "",
      officePhone: "",
      cityId: "",
      isActive: false,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CUSTOMER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CUSTOMER__CUSTOMER,
            href: DASHBOARD_CUSTOMER_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_CUSTOMER__NEW_CUSTOMER },
        ],
      },
    });
  }, [setConfig]);

  const [createCustomerAdmin, { loading }] = useMutation<
    CreateCustomerAdminMutation,
    CreateCustomerAdminMutationVariables
  >(MUTATION_CREATE_CUSTOMER_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createCustomerAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_CUSTOMER__SUCCESS, { variant: "success" });
      navigate(url.generate(DASHBOARD_CUSTOMER_DETAILS, { customerId: id }));
    },
  });

  const onSubmit: SubmitHandler<CreateCustomerAdminInputs> = (
    createCustomerAdminInputs
  ) => {
    createCustomerAdmin({ variables: { createCustomerAdminInputs } });
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
