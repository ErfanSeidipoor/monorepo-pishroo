import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import {
  GetProducersAdminAutoCompleteQuery,
  GetProducersAdminAutoCompleteQueryVariables,
  GetProducersAdminArgsGql,
} from "@admin/gql/graphql";

import { GET_PRODUCERS_ADMIN_AUTO_COMPLETE } from "./gql";

const useData = (producerId: string) => {
  const [errorQuery, setErrorQuery] = useState("");
  const [queryArgs, setQueryArgs] = useState<GetProducersAdminArgsGql>({
    producerId: producerId || undefined,
  });
  const [rows, setRows] = useState<
    GetProducersAdminAutoCompleteQuery["getProducersAdmin"]["edges"]
  >([]);

  useEffect(() => {
    setQueryArgs({
      producerId: producerId || undefined,
    });
  }, [producerId]);

  const { loading } = useQuery<
    GetProducersAdminAutoCompleteQuery,
    GetProducersAdminAutoCompleteQueryVariables
  >(GET_PRODUCERS_ADMIN_AUTO_COMPLETE, {
    variables: {
      getProducersAdminArgs: queryArgs,
    },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getProducersAdmin }) => {
      setRows(getProducersAdmin?.edges);
    },
  });

  const onInputChange = (producerName: string) => {
    setQueryArgs({
      search: producerName,
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
