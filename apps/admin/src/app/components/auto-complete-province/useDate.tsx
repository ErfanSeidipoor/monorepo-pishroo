import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import {
  GetProvincesAdminAutoCompleteQuery,
  GetProvincesAdminAutoCompleteQueryVariables,
  GetProvincesAdminArgsGql,
} from "@admin/gql/graphql";

import { GET_PROVINCES_ADMIN_AUTO_COMPLETE } from "./gql";

const useData = (provinceId: string) => {
  const [errorQuery, setErrorQuery] = useState("");
  const [queryArgs, setQueryArgs] = useState<GetProvincesAdminArgsGql>({
    provinceId: provinceId || undefined,
  });
  const [rows, setRows] = useState<
    GetProvincesAdminAutoCompleteQuery["getProvincesAdmin"]["edges"]
  >([]);

  useEffect(() => {
    setQueryArgs({
      provinceId: provinceId || undefined,
    });
  }, [provinceId]);

  const { loading } = useQuery<
    GetProvincesAdminAutoCompleteQuery,
    GetProvincesAdminAutoCompleteQueryVariables
  >(GET_PROVINCES_ADMIN_AUTO_COMPLETE, {
    variables: {
      getProvincesAdminArgs: queryArgs,
    },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getProvincesAdmin }) => {
      setRows(getProvincesAdmin?.edges);
    },
  });

  const onInputChange = (provinceName: string) => {
    setQueryArgs({
      name: provinceName,
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
