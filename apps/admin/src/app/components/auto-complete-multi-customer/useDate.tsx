import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import {
  GetCustomersAdminAutoCompleteMultiQuery,
  GetCustomersAdminAutoCompleteMultiQueryVariables,
} from "@admin/gql/graphql";

import { GET_PROVINCES_ADMIN_AUTO_COMPLETE_MULTI } from "./gql";

const useData = (customerIds: string[]) => {
  const [searchedRows, setSearchedRows] = useState<
    GetCustomersAdminAutoCompleteMultiQuery["getCustomersAdmin"]["edges"]
  >([]);
  const [selectedRows, setSelectedRows] = useState<
    GetCustomersAdminAutoCompleteMultiQuery["getCustomersAdmin"]["edges"]
  >([]);

  const [rows, setRows] = useState<
    GetCustomersAdminAutoCompleteMultiQuery["getCustomersAdmin"]["edges"]
  >([]);

  const [errorQuery, setErrorQuery] = useState("");

  const { loading, refetch } = useQuery<
    GetCustomersAdminAutoCompleteMultiQuery,
    GetCustomersAdminAutoCompleteMultiQueryVariables
  >(GET_PROVINCES_ADMIN_AUTO_COMPLETE_MULTI, {
    fetchPolicy: "no-cache",
    variables: { getCustomersAdminArgs: {} },
    onError: (error) => {
      setErrorQuery(error.message);
    },
  });

  useEffect(() => {
    const getCustomer = async (customerIds: string[]) => {
      const {
        data: { getCustomersAdmin },
      } = await refetch({ getCustomersAdminArgs: { customerIds } });
      setSelectedRows(getCustomersAdmin.edges);
    };

    if (customerIds && customerIds.length) {
      getCustomer(customerIds);
    }
  }, [customerIds, refetch]);

  useEffect(() => {
    const rows = searchedRows.filter(
      (row) => !selectedRows.find((row_) => row_.id === row.id)
    );
    setRows([...selectedRows, ...rows]);
  }, [selectedRows, searchedRows]);

  const onInputChange = async (search: string) => {
    setSearchedRows([]);
    const {
      data: { getCustomersAdmin },
    } = await refetch({ getCustomersAdminArgs: { search, customerIds: [] } });
    setSearchedRows(getCustomersAdmin.edges);
  };

  return {
    rows,
    loading,
    errorQuery,
    onInputChange,
  };
};

export default useData;
