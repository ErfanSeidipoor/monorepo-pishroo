import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import {
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProductsAdminArgsGql,
  GetProductsAdminQuery,
  GetProductsAdminQueryVariables,
  PaginationArgsGql,
  UpdateProductActivationAdminMutation,
  UpdateProductActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import TEXTS from "@pishroo/texts";
import { GetProductsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  QUERY_GET_PRODUCTS_ADMIN,
  MUTATION_UPDATE_PRODUCT_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProductsAdminQuery["getProductsAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      name: searchParams.get("name") || "",
      slug: searchParams.get("slug") || "",
      isActive: searchParams.has("isActive")
        ? searchParams.get("isActive") === "true"
        : true,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<GetProductsAdminQuery["getProductsAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetProductsAdminArgsGql>({
    ...convertSearchParamsToArgs(searchParams),
  });

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: Number(searchParams.get("page")) || 1,
  });

  const {
    handleSubmit: handleSubmitFilter,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<GetProductsAdminArgs>({
    resolver: classValidatorResolver(GetProductsAdminArgs),
    mode: "onChange",
    defaultValues: {
      name: queryArgs.name || "",
      slug: queryArgs.slug || "",
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<
    GetProductsAdminQuery,
    GetProductsAdminQueryVariables
  >(QUERY_GET_PRODUCTS_ADMIN, {
    variables: {
      getProductsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProductsAdmin }) => {
      setRows(getProductsAdmin?.edges);
      setPageInfo(getProductsAdmin?.pageInfo);
    },
  });

  const [
    updateProductActivationAdmin,
    { loading: updateProductActivaitonLoading },
  ] = useMutation<
    UpdateProductActivationAdminMutation,
    UpdateProductActivationAdminMutationVariables
  >(MUTATION_UPDATE_PRODUCT_ACTIVATION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (res) => {
      console.log(res);

      setActivationItem(undefined);
    },
  });

  useEffect(() => {
    setPaginationArgs({
      page: Number(searchParams.get("page")) || 1,
    });
    setQueryArgs({
      ...convertSearchParamsToArgs(searchParams),
    });
  }, [searchParams]);

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_PRODUCT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_PRODUCT__PRODUCT },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetProductsAdminArgs> = (
    loginAdminInputs
  ) => {
    navigate(url.generate(DASHBOARD_PRODUCT_ROUTE, {}, loginAdminInputs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_PRODUCT_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      name: "",
      slug: "",
      isActive: true,
    });
  };

  const onEdit = (productId: string) => {
    navigate(url.generate(DASHBOARD_PRODUCT_DETAILS, { productId }));
  };

  const onUpdateProductActivation = () => {
    if (activationItem)
      updateProductActivationAdmin({
        variables: {
          updateProductActivationAdmin: {
            isActive: !activationItem?.isActive,
            productId: activationItem?.id,
          },
        },
      });
  };
  return {
    pageInfo,
    rows,
    navigate,
    loading,
    paginationArgs,
    handleSubmitFilter,
    onSubmitFilter,
    onClearFilter,
    control,
    errors,
    isValid,
    onPageSelect,
    onEdit,
    activationItem,
    setActivationItem,
    updateProductActivaitonLoading,
    onUpdateProductActivation,
  };
};

export default useData;
