import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { GetProducersAdminArgs } from "libs/dto/src/admin";
import { Alert } from "react-native";
import {
  GetProducersAdminArgsGql,
  GetProducersAdminQuery,
  GetProducersAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_PRODUCERS_ADMIN } from "./gql";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const useData = () => {
  const [rows, setRows] = useState<
    GetProducersAdminQuery["getProducersAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<GetProducersAdminQuery["getProducersAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetProducersAdminArgsGql>({
    cityIds: [],
    provinceIds: [],
    isActive: true,
    search: "",
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
  } = useForm<GetProducersAdminArgs>({
    resolver: classValidatorResolver(GetProducersAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      provinceIds: queryArgs.provinceIds || [],
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading, refetch } = useQuery<
    GetProducersAdminQuery,
    GetProducersAdminQueryVariables
  >(QUERY_GET_PRODUCERS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getProducersAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ getProducersAdmin }) => {
      if (getProducersAdmin?.pageInfo.currentPage === 1) {
        setRows(getProducersAdmin.edges);
      } else {
        setRows([...rows, ...getProducersAdmin.edges]);
      }
      setPageInfo(getProducersAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetProducersAdminArgs> = (
    getProducersAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getProducersAdminArgs);
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
