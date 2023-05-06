import { useQuery } from "@apollo/client";
import { useTransporterDetails } from "@app/hooks";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { GetTransporterActionsAdminArgs } from "libs/dto/src/admin/transporterAction/get-transporter-actions.args";

import {
  GetTransporterActionsAdminArgsGql,
  GetTransporterActionsAdminQuery,
  GetTransporterActionsAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_TRANSPORTER_ACTIONS_ADMIN } from "./gql";

const useData = () => {
  const { transporterId } = useTransporterDetails();
  const [rows, setRows] = useState<
    GetTransporterActionsAdminQuery["getTransporterActionsAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<
      GetTransporterActionsAdminQuery["getTransporterActionsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetTransporterActionsAdminArgsGql>(
    {
      search: "",
      transporterId,
    }
  );

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: 1,
    limit: 5,
  });

  const {
    handleSubmit: handleSubmitFilter,
    control,
    formState: { errors, isValid },
  } = useForm<GetTransporterActionsAdminArgs>({
    resolver: classValidatorResolver(GetTransporterActionsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      transporterId,
    },
  });

  const { loading, refetch } = useQuery<
    GetTransporterActionsAdminQuery,
    GetTransporterActionsAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_ACTIONS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getTransporterActionsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ getTransporterActionsAdmin }) => {
      setRows(getTransporterActionsAdmin?.edges);
      setPageInfo(getTransporterActionsAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetTransporterActionsAdminArgs> = (
    getTransporterActionsAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getTransporterActionsAdminArgs);
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
