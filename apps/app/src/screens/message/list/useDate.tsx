import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { GetMessagesAdminArgs } from "libs/dto/src/admin";
import { Alert } from "react-native";
import {
  GetMessagesAdminArgsGql,
  GetMessagesAdminQuery,
  GetMessagesAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_MESSAGES_ADMIN } from "./gql";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useUser } from "@app/hooks";

const useData = () => {
  const { currentUser } = useUser();
  const [rows, setRows] = useState<
    GetMessagesAdminQuery["getMessagesAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<GetMessagesAdminQuery["getMessagesAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetMessagesAdminArgsGql>({
    isActive: true,
    isSubmitted: false,
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
  } = useForm<GetMessagesAdminArgs>({
    resolver: classValidatorResolver(GetMessagesAdminArgs),
    mode: "onChange",
    defaultValues: {
      isActive: true,
      isSubmitted: queryArgs.isSubmitted || false,
      userId: currentUser.id,
      search: queryArgs.search || "",
    },
  });

  const { loading, refetch } = useQuery<
    GetMessagesAdminQuery,
    GetMessagesAdminQueryVariables
  >(QUERY_GET_MESSAGES_ADMIN, {
    variables: {
      getMessagesAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: ({ getMessagesAdmin }) => {
      if (getMessagesAdmin?.pageInfo.currentPage === 1) {
        setRows(getMessagesAdmin.edges);
      } else {
        setRows([...rows, ...getMessagesAdmin.edges]);
      }
      setPageInfo(getMessagesAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetMessagesAdminArgs> = (
    getMessagesAdminArgs
  ) => {
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getMessagesAdminArgs);
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
