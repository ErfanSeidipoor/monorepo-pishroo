import { useDashboardLayout, useProductDetails } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetProductPropertiesAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_PRODUCT_PROPERTY_DETAILS,
  DASHBOARD_PRODUCT_PROPERTY_NEW_PRODUCT_PROPERTY_ROUTE,
  DASHBOARD_PRODUCT_PROPERTY_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProductPropertiesAdminArgsGql,
  GetProductPropertiesAdminQuery,
  GetProductPropertiesAdminQueryVariables,
  PaginationArgsGql,
  RemovePropertyFromProductAdminInputsMutation,
  RemovePropertyFromProductAdminInputsMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_PRODUCT_PROPERTIES_ADMIN,
  MUTATION_REMOVE_PROPERTY_FROM_PRODUCT_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { productId, product } = useProductDetails();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProductPropertiesAdminQuery["getProductPropertiesAdmin"]["edges"]
  >([]);

  const [deleteItem, setDeleteItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      name: searchParams.get("name") || "",
      productId,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetProductPropertiesAdminQuery["getProductPropertiesAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetProductPropertiesAdminArgsGql>({
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
  } = useForm<GetProductPropertiesAdminArgs>({
    resolver: classValidatorResolver(GetProductPropertiesAdminArgs),
    mode: "onChange",
    defaultValues: {
      name: queryArgs.name || "",
      productId,
    },
  });

  const { loading } = useQuery<
    GetProductPropertiesAdminQuery,
    GetProductPropertiesAdminQueryVariables
  >(QUERY_GET_PRODUCT_PROPERTIES_ADMIN, {
    variables: {
      getProductPropertiesAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProductPropertiesAdmin }) => {
      setRows(getProductPropertiesAdmin?.edges);
      setPageInfo(getProductPropertiesAdmin?.pageInfo);
    },
  });

  const [
    removePropertyFromProductAdmin,
    { loading: deleteProductPropertyLoading },
  ] = useMutation<
    RemovePropertyFromProductAdminInputsMutation,
    RemovePropertyFromProductAdminInputsMutationVariables
  >(MUTATION_REMOVE_PROPERTY_FROM_PRODUCT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (res) => {
      setDeleteItem(undefined);
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
      pageName: TEXTS.PAGE_PRODUCT_PROPERTY__PAGE_TITLE,
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
          { label: TEXTS.PAGE_PRODUCT_PROPERTY__PRODUCT_PROPERTY },
        ],
      },
    });
  }, [setConfig, product, productId]);

  const onSubmitFilter: SubmitHandler<GetProductPropertiesAdminArgs> = (
    getProductPropertiesAdminArgs
  ) => {
    const { name } = getProductPropertiesAdminArgs;
    console.log({ name });

    navigate(
      url.generate(DASHBOARD_PRODUCT_PROPERTY_ROUTE, { productId }, { name })
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(
        DASHBOARD_PRODUCT_PROPERTY_ROUTE,
        {},
        { ...paginationArgs, page }
      )
    );
  };

  const onClearFilter = () => {
    reset({
      name: "",
    });

    navigate(url.generate(DASHBOARD_PRODUCT_PROPERTY_ROUTE, { productId }, {}));
  };

  const onEdit = (productPropertyId: string) => {
    navigate(
      url.generate(DASHBOARD_PRODUCT_PROPERTY_DETAILS, {
        productId,
        productPropertyId,
      })
    );
  };

  const onNew = () => {
    navigate(
      url.generate(DASHBOARD_PRODUCT_PROPERTY_NEW_PRODUCT_PROPERTY_ROUTE, {
        productId,
      })
    );
  };

  const onDeleteProductProperty = () => {
    if (deleteItem)
      removePropertyFromProductAdmin({
        variables: {
          removePropertyFromProductAdminInputs: {
            productPropertyId: deleteItem.id,
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
    onNew,
    deleteItem,
    setDeleteItem,
    deleteProductPropertyLoading,
    onDeleteProductProperty,
  };
};

export default useData;
