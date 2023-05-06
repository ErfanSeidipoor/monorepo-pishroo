import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { GetTransporterAgentsAdminArgs } from "libs/dto/src/admin/transporterAgent/get-transporter-agents.args";
import { Alert } from "react-native";

import { useTransporterDetails } from "@app/hooks";
import {
  GetTransporterAgentsAdminArgsGql,
  GetTransporterAgentsAdminQuery,
  GetTransporterAgentsAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_TRANSPORTER_AGENTS_ADMIN } from "./gql";

const useData = () => {
  const { transporterId } = useTransporterDetails();
  const [rows, setRows] = useState<
    GetTransporterAgentsAdminQuery["getTransporterAgentsAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<
      GetTransporterAgentsAdminQuery["getTransporterAgentsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetTransporterAgentsAdminArgsGql>({
    transporterId,
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
  } = useForm<GetTransporterAgentsAdminArgs>({
    resolver: classValidatorResolver(GetTransporterAgentsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      transporterId,
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading, refetch } = useQuery<
    GetTransporterAgentsAdminQuery,
    GetTransporterAgentsAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_AGENTS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getTransporterAgentsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      console.log({ error });

      Alert.alert(error.message);
    },
    onCompleted: ({ getTransporterAgentsAdmin }) => {
      if (getTransporterAgentsAdmin?.pageInfo.currentPage === 1) {
        setRows(getTransporterAgentsAdmin.edges);
      } else {
        setRows([...rows, ...getTransporterAgentsAdmin.edges]);
      }
      setPageInfo(getTransporterAgentsAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetTransporterAgentsAdminArgs> = (
    getTransporterAgentsAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getTransporterAgentsAdminArgs);
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
