import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { GetCustomersAdminArgs } from "libs/dto/src/admin";
import {
  GetCustomersAdminArgsGql,
  GetCustomersAdminQuery,
  GetCustomersAdminQueryVariables,
  PaginationArgsGql,
} from "@app/gql/graphql";

import { QUERY_GET_CUSTOMERS_ADMIN } from "./gql";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const useData = () => {
  const [rows, setRows] = useState<
    GetCustomersAdminQuery["getCustomersAdmin"]["edges"]
  >([]);

  const [pageInfo, setPageInfo] =
    useState<GetCustomersAdminQuery["getCustomersAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetCustomersAdminArgsGql>({
    customerIds: [],
    cityIds: [],
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
  } = useForm<GetCustomersAdminArgs>({
    resolver: classValidatorResolver(GetCustomersAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      provinceIds: queryArgs.provinceIds || [],
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading, refetch } = useQuery<
    GetCustomersAdminQuery,
    GetCustomersAdminQueryVariables
  >(QUERY_GET_CUSTOMERS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getCustomersAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      console.log("error: ", { error });
    },
    onCompleted: ({ getCustomersAdmin }) => {
      console.log("onCompleted: ", { getCustomersAdmin });

      if (getCustomersAdmin?.pageInfo.currentPage === 1) {
        setRows(getCustomersAdmin.edges);
      } else {
        setRows([...rows, ...getCustomersAdmin.edges]);
      }
      setPageInfo(getCustomersAdmin?.pageInfo);
    },
  });

  const onSubmitFilter: SubmitHandler<GetCustomersAdminArgs> = (
    getCustomersAdminArgs
  ) => {
    console.log(getCustomersAdminArgs);
    setPaginationArgs((paginationArgs) => ({
      ...paginationArgs,
      page: 1,
    }));
    setQueryArgs(getCustomersAdminArgs);
    refetch();
  };

  const onEndReached = () => {
    console.log("onEndReached");

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
