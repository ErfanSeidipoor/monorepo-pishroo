import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { GetProducerAgentsAdminArgs } from "libs/dto/src/admin/producerAgent/get-producer-agents.args";
import { Alert } from "react-native";

import { useProducerDetails } from "@app/hooks";
import {
  GetProducerAgentsAdminArgsGql,
  GetProducerAgentsAdminQuery,
  GetProducerAgentsAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_PRODUCER_AGENTS_ADMIN } from "./gql";

const useData = () => {
  const { producerId } = useProducerDetails();
  const [rows, setRows] = useState<
    GetProducerAgentsAdminQuery["getProducerAgentsAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<
      GetProducerAgentsAdminQuery["getProducerAgentsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetProducerAgentsAdminArgsGql>({
    producerId,
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
  } = useForm<GetProducerAgentsAdminArgs>({
    resolver: classValidatorResolver(GetProducerAgentsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      producerId,
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading, refetch } = useQuery<
    GetProducerAgentsAdminQuery,
    GetProducerAgentsAdminQueryVariables
  >(QUERY_GET_PRODUCER_AGENTS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getProducerAgentsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      console.log({ error });

      Alert.alert(error.message);
    },
    onCompleted: ({ getProducerAgentsAdmin }) => {
      if (getProducerAgentsAdmin?.pageInfo.currentPage === 1) {
        setRows(getProducerAgentsAdmin.edges);
      } else {
        setRows([...rows, ...getProducerAgentsAdmin.edges]);
      }
      setPageInfo(getProducerAgentsAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetProducerAgentsAdminArgs> = (
    getProducerAgentsAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getProducerAgentsAdminArgs);
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
