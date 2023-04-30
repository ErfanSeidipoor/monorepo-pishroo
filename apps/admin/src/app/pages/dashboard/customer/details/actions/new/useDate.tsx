import { useCustomerDetails, useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_CUSTOMER_DETAILS,
  DASHBOARD_CUSTOMER_ACTION_DETAILS,
  DASHBOARD_CUSTOMER_ACTION_ROUTE,
  DASHBOARD_CUSTOMER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateCustomerActionAdminInputsMutation,
  CreateCustomerActionAdminInputsMutationVariables,
} from "@admin/gql/graphql";

import { CreateCustomerActionAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_CUSTOMER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { customerId, customer } = useCustomerDetails();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateCustomerActionAdminInputs>({
    resolver: classValidatorResolver(CreateCustomerActionAdminInputs),
    mode: "onChange",
    defaultValues: {
      text: "",
      customerId,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CUSTOMER_ACTION__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CUSTOMER__CUSTOMER,
            href: DASHBOARD_CUSTOMER_ROUTE,
          },
          {
            label: customer
              ? customer?.firstName + customer?.lastName
              : TEXTS.PAGE_CUSTOMER_UPDATE__UPDATE_CUSTOMER,
            href: customer
              ? url.generate(DASHBOARD_CUSTOMER_DETAILS, {
                  customerId: customer?.id,
                })
              : DASHBOARD_CUSTOMER_ROUTE,
          },
          {
            label: TEXTS.PAGE_CUSTOMER_ACTION__CUSTOMER_ACTION,
            href: url.generate(DASHBOARD_CUSTOMER_ACTION_ROUTE, { customerId }),
          },
          { label: TEXTS.PAGE_NEW_CUSTOMER_ACTION__NEW_CUSTOMER_ACTION },
        ],
      },
    });
  }, [setConfig, customer, customerId]);

  const [createCustomerActionAdmin, { loading }] = useMutation<
    CreateCustomerActionAdminInputsMutation,
    CreateCustomerActionAdminInputsMutationVariables
  >(MUTATION_CREATE_CUSTOMER_ACTION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createCustomerActionAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_CUSTOMER_ACTION__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_CUSTOMER_ACTION_DETAILS, {
          customerId,
          customerActionId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateCustomerActionAdminInputs> = (
    createCustomerActionAdminInputs
  ) => {
    createCustomerActionAdmin({
      variables: {
        createCustomerActionAdminInputs,
      },
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
