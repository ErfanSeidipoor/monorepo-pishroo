import { useQuery } from "@apollo/client";
import { useState } from "react";

import {
  GetColorsAdminAutoCompleteQuery,
  GetColorsAdminAutoCompleteQueryVariables,
} from "@admin/gql/graphql";

import { GET_COLORS_ADMIN_AUTO_COMPLETE } from "./gql";

const useData = () => {
  const [errorQuery, setErrorQuery] = useState("");

  const [rows, setRows] = useState<
    GetColorsAdminAutoCompleteQuery["getColorsAdmin"]["edges"]
  >([]);

  const { loading } = useQuery<
    GetColorsAdminAutoCompleteQuery,
    GetColorsAdminAutoCompleteQueryVariables
  >(GET_COLORS_ADMIN_AUTO_COMPLETE, {
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
