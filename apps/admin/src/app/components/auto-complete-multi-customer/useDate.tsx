import { useQuery } from "@apollo/client";
import { useState } from "react";

import {
  GetCustomersAdminAutoCompleteMultiQuery,
  GetCustomersAdminAutoCompleteMultiQueryVariables,
} from "@admin/gql/graphql";

import { GET_PROVINCES_ADMIN_AUTO_COMPLETE_MULTI } from "./gql";

const useData = () => {
  const [errorQuery, setErrorQuery] = useState("");

  const [rows, setRows] = useState<
    GetCustomersAdminAutoCompleteMultiQuery["getCustomersAdmin"]["edges"]
  >([]);

  const { loading } = useQuery<
    GetCustomersAdminAutoCompleteMultiQuery,
    GetCustomersAdminAutoCompleteMultiQueryVariables
  >(GET_PROVINCES_ADMIN_AUTO_COMPLETE_MULTI, {
    variables: { getCustomersAdminArgs: {} },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getCustomersAdmin }) => {
      setRows(getCustomersAdmin?.edges);
    },
  });

  return {
    loading,
    errorQuery,
    rows,
  };
};

export default useData;
