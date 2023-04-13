import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import {
  GetTransportersAdminAutoCompleteQuery,
  GetTransportersAdminAutoCompleteQueryVariables,
  GetTransportersAdminArgsGql,
} from "@admin/gql/graphql";

import { GET_TRANSPORTERS_ADMIN_AUTO_COMPLETE } from "./gql";

const useData = (transporterId: string) => {
  const [errorQuery, setErrorQuery] = useState("");
  const [queryArgs, setQueryArgs] = useState<GetTransportersAdminArgsGql>({
    transporterId: transporterId || undefined,
  });
  const [rows, setRows] = useState<
    GetTransportersAdminAutoCompleteQuery["getTransportersAdmin"]["edges"]
  >([]);

  useEffect(() => {
    setQueryArgs({
      transporterId: transporterId || undefined,
    });
  }, [transporterId]);

  const { loading } = useQuery<
    GetTransportersAdminAutoCompleteQuery,
    GetTransportersAdminAutoCompleteQueryVariables
  >(GET_TRANSPORTERS_ADMIN_AUTO_COMPLETE, {
    fetchPolicy: "no-cache",
    variables: {
      getTransportersAdminArgs: queryArgs,
    },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getTransportersAdmin }) => {
      setRows(getTransportersAdmin?.edges);
    },
  });

  const onInputChange = (transporterName: string) => {
    setQueryArgs({
      search: transporterName,
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
