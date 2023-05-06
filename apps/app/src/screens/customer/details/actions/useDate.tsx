import { useQuery } from "@apollo/client";
import { useCustomerDetails } from "@app/hooks";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { GetCustomerActionsAdminArgs } from "libs/dto/src/admin/customerAction/get-customer-actions.args";

import {
  GetCustomerActionsAdminArgsGql,
  GetCustomerActionsAdminQuery,
  GetCustomerActionsAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_CUSTOMER_ACTIONS_ADMIN } from "./gql";

const useData = () => {
  const { customerId } = useCustomerDetails();
  const [rows, setRows] = useState<
    GetCustomerActionsAdminQuery["getCustomerActionsAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<
      GetCustomerActionsAdminQuery["getCustomerActionsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetCustomerActionsAdminArgsGql>({
    search: "",
    customerId,
  });

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: 1,
    limit: 5,
  });

  const {
    handleSubmit: handleSubmitFilter,
    control,
    formState: { errors, isValid },
  } = useForm<GetCustomerActionsAdminArgs>({
    resolver: classValidatorResolver(GetCustomerActionsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      customerId,
    },
  });

  const { loading, refetch } = useQuery<
    GetCustomerActionsAdminQuery,
    GetCustomerActionsAdminQueryVariables
  >(QUERY_GET_CUSTOMER_ACTIONS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getCustomerActionsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ getCustomerActionsAdmin }) => {
      setRows(getCustomerActionsAdmin?.edges);
      setPageInfo(getCustomerActionsAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetCustomerActionsAdminArgs> = (
    getCustomerActionsAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getCustomerActionsAdminArgs);
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
