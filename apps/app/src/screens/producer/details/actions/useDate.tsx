import { useQuery } from "@apollo/client";
import { useProducerDetails } from "@app/hooks";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { GetProducerActionsAdminArgs } from "libs/dto/src/admin";

import {
  GetProducerActionsAdminArgsGql,
  GetProducerActionsAdminQuery,
  GetProducerActionsAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_PRODUCER_ACTIONS_ADMIN } from "./gql";

const useData = () => {
  const { producerId } = useProducerDetails();
  const [rows, setRows] = useState<
    GetProducerActionsAdminQuery["getProducerActionsAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<
      GetProducerActionsAdminQuery["getProducerActionsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetProducerActionsAdminArgsGql>({
    search: "",
    producerId,
  });

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: 1,
    limit: 5,
  });

  const {
    handleSubmit: handleSubmitFilter,
    control,
    formState: { errors, isValid },
  } = useForm<GetProducerActionsAdminArgs>({
    resolver: classValidatorResolver(GetProducerActionsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      producerId,
    },
  });

  const { loading, refetch } = useQuery<
    GetProducerActionsAdminQuery,
    GetProducerActionsAdminQueryVariables
  >(QUERY_GET_PRODUCER_ACTIONS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getProducerActionsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ getProducerActionsAdmin }) => {
      setRows(getProducerActionsAdmin?.edges);
      setPageInfo(getProducerActionsAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetProducerActionsAdminArgs> = (
    getProducerActionsAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getProducerActionsAdminArgs);
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
