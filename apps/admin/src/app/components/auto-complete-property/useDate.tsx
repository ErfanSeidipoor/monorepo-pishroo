import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import {
  GetPropertiesAdminAutoCompleteQuery,
  GetPropertiesAdminAutoCompleteQueryVariables,
  GetPropertiesAdminArgsGql,
} from "@admin/gql/graphql";

import { GET_PROPERTIES_ADMIN_AUTO_COMPLETE } from "./gql";

const useData = (propertyId: string) => {
  const [errorQuery, setErrorQuery] = useState("");
  const [queryArgs, setQueryArgs] = useState<GetPropertiesAdminArgsGql>({
    propertyId: propertyId || undefined,
  });
  const [rows, setRows] = useState<
    GetPropertiesAdminAutoCompleteQuery["getPropertiesAdmin"]["edges"]
  >([]);

  useEffect(() => {
    setQueryArgs({
      propertyId: propertyId || undefined,
    });
  }, [propertyId]);

  const { loading } = useQuery<
    GetPropertiesAdminAutoCompleteQuery,
    GetPropertiesAdminAutoCompleteQueryVariables
  >(GET_PROPERTIES_ADMIN_AUTO_COMPLETE, {
    variables: {
      getPropertiesAdminArgs: queryArgs,
    },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getPropertiesAdmin }) => {
      setRows(getPropertiesAdmin?.edges);
    },
  });

  const onInputChange = (propertyName: string) => {
    setQueryArgs({
      name: propertyName,
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
