import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { GetProductsAdminArgs } from "libs/dto/src/admin/product/get-products.args";
import { Alert } from "react-native";
import {
  GetProductsAdminArgsGql,
  GetProductsAdminQuery,
  GetProductsAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_PRODUCTS_ADMIN } from "./gql";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const useData = () => {
  const [rows, setRows] = useState<
    GetProductsAdminQuery["getProductsAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<GetProductsAdminQuery["getProductsAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetProductsAdminArgsGql>({
    isActive: true,
    slug: "",
    name: "",
  });

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: 1,
    limit: 5,
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

  const { loading, refetch } = useQuery<
    GetProductsAdminQuery,
    GetProductsAdminQueryVariables
  >(QUERY_GET_PRODUCTS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getProductsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ getProductsAdmin }) => {
      if (getProductsAdmin?.pageInfo.currentPage === 1) {
        setRows(getProductsAdmin.edges);
      } else {
        setRows([...rows, ...getProductsAdmin.edges]);
      }
      setPageInfo(getProductsAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetProductsAdminArgs> = (
    getProductsAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getProductsAdminArgs);
    refetch();
  };

  const onEndReached = () => {
    if (pageInfo && pageInfo.totalPages > pageInfo.currentPage) {
      setPaginationArgs((paginationArgs) => ({
        ...paginationArgs,
        page: pageInfo.currentPage + 1,
      }));
    }
  };

  return {
    pageInfo,
    rows,
    loading,
    paginationArgs,
    handleSubmitFilter,
    onSubmitFilter,
    onEndReached,
    control,
    errors,
    isValid,
  };
};

export default useData;
