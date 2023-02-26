import { useQuery } from "@apollo/client";
import { useState } from "react";

import {
  GetProvincesAdminAutoCompleteQuery,
  GetProvincesAdminAutoCompleteQueryVariables,
} from "@admin/gql/graphql";

import { GET_PROVINCES_ADMIN_AUTO_COMPLETE_MULTI } from "./gql";

const useData = () => {
  const [errorQuery, setErrorQuery] = useState("");

  const [rows, setRows] = useState<
    GetProvincesAdminAutoCompleteQuery["getProvincesAdmin"]["edges"]
  >([]);

  const { loading } = useQuery<
    GetProvincesAdminAutoCompleteQuery,
    GetProvincesAdminAutoCompleteQueryVariables
  >(GET_PROVINCES_ADMIN_AUTO_COMPLETE_MULTI, {
    variables: { getProvincesAdminArgs: {} },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getProvincesAdmin }) => {
      setRows(getProvincesAdmin?.edges);
    },
  });

  return {
    loading,
    errorQuery,
    rows,
  };
};

export default useData;
