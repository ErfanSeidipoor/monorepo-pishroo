import { useQuery } from "@apollo/client";
import { useState } from "react";

import {
  GetCategoriesAdminAutoCompleteMultiQuery,
  GetCategoriesAdminAutoCompleteMultiQueryVariables,
} from "@admin/gql/graphql";

import { GET_CATEGORIES_ADMIN_AUTO_COMPLETE_MULTI } from "./gql";

const useData = () => {
  const [errorQuery, setErrorQuery] = useState("");

  const [rows, setRows] = useState<
    GetCategoriesAdminAutoCompleteMultiQuery["getCategoriesAdmin"]["edges"]
  >([]);

  const { loading } = useQuery<
    GetCategoriesAdminAutoCompleteMultiQuery,
    GetCategoriesAdminAutoCompleteMultiQueryVariables
  >(GET_CATEGORIES_ADMIN_AUTO_COMPLETE_MULTI, {
    variables: { getCategoriesAdminArgs: {} },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getCategoriesAdmin }) => {
      setRows(getCategoriesAdmin?.edges);
    },
  });

  return {
    loading,
    errorQuery,
    rows,
  };
};

export default useData;
