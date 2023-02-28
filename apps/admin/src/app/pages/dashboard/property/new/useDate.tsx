import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PROPERTY_DETAILS,
  DASHBOARD_PROPERTY_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreatePropertyAdminInputsGql,
  CreatePropertyAdminMutation,
  CreatePropertyAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreatePropertyAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PROPERTY_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreatePropertyAdminInputs>({
    resolver: classValidatorResolver(CreatePropertyAdminInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
      isActive: true,
      unit: undefined,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROPERTY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROPERTY__PROPERTY,
            href: DASHBOARD_PROPERTY_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_PROPERTY__NEW_PROPERTY },
        ],
      },
    });
  }, [setConfig]);

  const [createPropertyAdmin, { loading }] = useMutation<
    CreatePropertyAdminMutation,
    CreatePropertyAdminMutationVariables
  >(MUTATION_CREATE_PROPERTY_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createPropertyAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PROPERTY__SUCCESS, {
        variant: "success",
      });

      navigate(
        url.generate(DASHBOARD_PROPERTY_DETAILS, {
          propertyId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreatePropertyAdminInputs> = (
    createPropertyAdminInputs
  ) => {
    createPropertyAdmin({
      variables: {
        createPropertyAdminInputs:
          createPropertyAdminInputs as unknown as CreatePropertyAdminInputsGql,
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
