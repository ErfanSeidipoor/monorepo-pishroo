import { useDashboardLayout, useProductDetails } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_PRODUCT_PROPERTY_DETAILS,
  DASHBOARD_PRODUCT_PROPERTY_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  AddPropertyToProductAdminInputsMutation,
  AddPropertyToProductAdminInputsMutationVariables,
} from "@admin/gql/graphql";

import { AddPropertyToProductAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_ADD_PROPERTY_TO_PRODUCT_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { productId, product } = useProductDetails();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<AddPropertyToProductAdminInputs>({
    resolver: classValidatorResolver(AddPropertyToProductAdminInputs),
    mode: "onChange",
    defaultValues: {
      propertyId: "",
      value: "",
      productId,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCT_PROPERTY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCT__PRODUCT,
            href: DASHBOARD_PRODUCT_ROUTE,
          },
          {
            label: product
              ? product?.name
              : TEXTS.PAGE_PRODUCT_UPDATE__UPDATE_PRODUCT,
            href: product
              ? url.generate(DASHBOARD_PRODUCT_DETAILS, {
                  productId: product?.id,
                })
              : DASHBOARD_PRODUCT_ROUTE,
          },
          {
            label: TEXTS.PAGE_PRODUCT_PROPERTY__PRODUCT_PROPERTY,
            href: url.generate(DASHBOARD_PRODUCT_PROPERTY_ROUTE, { productId }),
          },
          { label: TEXTS.PAGE_NEW_PRODUCT_PROPERTY__NEW_PRODUCT_PROPERTY },
        ],
      },
    });
  }, [setConfig, product, productId]);

  const [addPropertyToProductAdmin, { loading }] = useMutation<
    AddPropertyToProductAdminInputsMutation,
    AddPropertyToProductAdminInputsMutationVariables
  >(MUTATION_ADD_PROPERTY_TO_PRODUCT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        addPropertyToProductAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PRODUCT_PROPERTY__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_PRODUCT_PROPERTY_DETAILS, {
          productId,
          productPropertyId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<AddPropertyToProductAdminInputs> = (
    addPropertyToProductAdminInputs
  ) => {
    addPropertyToProductAdmin({
      variables: {
        addPropertyToProductAdminInputs,
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
