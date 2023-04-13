import { useQuery } from "@apollo/client";
import { useState } from "react";

import {
  GetColorsAdminAutoCompleteMultiQuery,
  GetColorsAdminAutoCompleteMultiQueryVariables,
} from "@admin/gql/graphql";

import { GET_COLORS_ADMIN_AUTO_COMPLETE_MULTI } from "./gql";

const useData = () => {
  const [errorQuery, setErrorQuery] = useState("");

  const [rows, setRows] = useState<
    GetColorsAdminAutoCompleteMultiQuery["getColorsAdmin"]["edges"]
  >([]);

  const { loading } = useQuery<
    GetColorsAdminAutoCompleteMultiQuery,
    GetColorsAdminAutoCompleteMultiQueryVariables
  >(GET_COLORS_ADMIN_AUTO_COMPLETE_MULTI, {
    fetchPolicy: "no-cache",
    variables: { getColorsAdminArgs: {} },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getColorsAdmin }) => {
      setRows(getColorsAdmin?.edges);
    },
  });

  return {
    loading,
    errorQuery,
    rows,
  };
};

export default useData;
