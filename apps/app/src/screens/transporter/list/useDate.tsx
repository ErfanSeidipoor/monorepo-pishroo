import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { GetTransportersAdminArgs } from "libs/dto/src/admin";
import { Alert } from "react-native";
import {
  GetTransportersAdminArgsGql,
  GetTransportersAdminQuery,
  GetTransportersAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_TRANSPORTERS_ADMIN } from "./gql";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const useData = () => {
  const [rows, setRows] = useState<
    GetTransportersAdminQuery["getTransportersAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<GetTransportersAdminQuery["getTransportersAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetTransportersAdminArgsGql>({
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
  } = useForm<GetTransportersAdminArgs>({
    resolver: classValidatorResolver(GetTransportersAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      provinceIds: queryArgs.provinceIds || [],
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading, refetch } = useQuery<
    GetTransportersAdminQuery,
    GetTransportersAdminQueryVariables
  >(QUERY_GET_TRANSPORTERS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getTransportersAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ getTransportersAdmin }) => {
      if (getTransportersAdmin?.pageInfo.currentPage === 1) {
        setRows(getTransportersAdmin.edges);
      } else {
        setRows([...rows, ...getTransportersAdmin.edges]);
      }
      setPageInfo(getTransportersAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetTransportersAdminArgs> = (
    getTransportersAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getTransportersAdminArgs);
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
