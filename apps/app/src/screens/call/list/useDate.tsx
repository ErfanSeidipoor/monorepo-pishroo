import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { GetCallsAdminArgs } from "libs/dto/src/admin/call/get-calls.args";
import { Alert } from "react-native";
import {
  GetCallsAdminArgsGql,
  GetCallsAdminQuery,
  GetCallsAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_CALLS_ADMIN } from "./gql";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useUser } from "@app/hooks";

const useData = () => {
  const { currentUser } = useUser();
  const [rows, setRows] = useState<
    GetCallsAdminQuery["getCallsAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<GetCallsAdminQuery["getCallsAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetCallsAdminArgsGql>({
    userId: currentUser.id,
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
  } = useForm<GetCallsAdminArgs>({
    resolver: classValidatorResolver(GetCallsAdminArgs),
    mode: "onChange",
    defaultValues: {
      userId: currentUser.id,
      search: queryArgs.search || "",
    },
  });

  const { loading, refetch } = useQuery<
    GetCallsAdminQuery,
    GetCallsAdminQueryVariables
  >(QUERY_GET_CALLS_ADMIN, {
    variables: {
      getCallsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ getCallsAdmin }) => {
      if (getCallsAdmin?.pageInfo.currentPage === 1) {
        setRows(getCallsAdmin.edges);
      } else {
        setRows([...rows, ...getCallsAdmin.edges]);
      }
      setPageInfo(getCallsAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetCallsAdminArgs> = (
    getCallsAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getCallsAdminArgs);
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
