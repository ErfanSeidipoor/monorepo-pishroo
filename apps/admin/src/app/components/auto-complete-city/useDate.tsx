import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import {
  GetCitiesAdminAutoCompleteQuery,
  GetCitiesAdminAutoCompleteQueryVariables,
  GetCitiesAdminArgsGql,
} from "@admin/gql/graphql";

import { GET_CITIES_ADMIN_AUTO_COMPLETE } from "./gql";

const useData = (cityId: string) => {
  const [errorQuery, setErrorQuery] = useState("");
  const [queryArgs, setQueryArgs] = useState<GetCitiesAdminArgsGql>({
    cityId: cityId || undefined,
  });
  const [rows, setRows] = useState<
    GetCitiesAdminAutoCompleteQuery["getCitiesAdmin"]["edges"]
  >([]);

  useEffect(() => {
    setQueryArgs({
      cityId: cityId || undefined,
    });
  }, [cityId]);

  const { loading } = useQuery<
    GetCitiesAdminAutoCompleteQuery,
    GetCitiesAdminAutoCompleteQueryVariables
  >(GET_CITIES_ADMIN_AUTO_COMPLETE, {
    fetchPolicy: "no-cache",
    variables: {
      getCitiesAdminArgs: queryArgs,
    },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getCitiesAdmin }) => {
      setRows(getCitiesAdmin?.edges);
    },
  });

  const onInputChange = (cityName: string) => {
    setQueryArgs({
      name: cityName,
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
