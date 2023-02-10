import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useQuery } from "@apollo/client";

import { DASHBOARD_PRODUCT_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetProductsAdminArgsGql,
  GetProductsAdminQuery,
  GetProductsAdminQueryVariables,
  PaginationArgsGql,
} from "@admin/gql/graphql";

import TEXTS from "@pishroo/texts";
import { GetProductsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import { QUERY_GET_PRODUCTS_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      name: searchParams.get("name") || "",
      slug: searchParams.get("slug") || "",
      isActive: searchParams.has("isActive")
        ? searchParams.get("isActive") === "true"
        : true,
    };
  };

  const [rows, setRows] = useState<
    GetProductsAdminQuery["getProductsAdmin"]["edges"]
  >([]);

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
  };
};

export default useData;
