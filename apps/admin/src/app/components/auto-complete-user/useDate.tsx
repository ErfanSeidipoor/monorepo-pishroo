import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import {
  GetUsersAdminArgsGql,
  GetUsersAdminAutoCompleteQuery,
  GetUsersAdminAutoCompleteQueryVariables,
} from "@admin/gql/graphql";

import { GET_USERS_ADMIN_AUTO_COMPLETE } from "./gql";

const useData = (userId: string) => {
  const [errorQuery, setErrorQuery] = useState("");
  const [queryArgs, setQueryArgs] = useState<GetUsersAdminArgsGql>({
    userId: userId || undefined,
  });
  const [rows, setRows] = useState<
    GetUsersAdminAutoCompleteQuery["getUsersAdmin"]["edges"]
  >([]);

  useEffect(() => {
    setQueryArgs({
      userId: userId || undefined,
    });
  }, [userId]);

  const { loading } = useQuery<
    GetUsersAdminAutoCompleteQuery,
    GetUsersAdminAutoCompleteQueryVariables
  >(GET_USERS_ADMIN_AUTO_COMPLETE, {
    variables: {
      getUsersAdminArgs: queryArgs,
    },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getUsersAdmin }) => {
      setRows(getUsersAdmin?.edges);
    },
  });

  const onInputChange = (userName: string) => {
    setQueryArgs({
      name: userName,
    });
  };

  return {
    loading,
    errorQuery,
    rows,
    onInputChange,
  };
};

export default useData;
