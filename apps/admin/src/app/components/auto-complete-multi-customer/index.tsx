import { TextFieldProps } from "@mui/material";
import { FC } from "react";

import { AutocompleteMultiple } from "@pishroo/admin-components";

import useData from "./useDate";

export const AutoCompleteMultiCustomer: FC<
  {
    customerIds?: string[];
    onChange?: (customerIds?: string[]) => void;
  } & TextFieldProps
> = ({ customerIds, onChange = () => "", error, ...props }) => {
  const { loading, errorQuery, rows, onInputChange } = useData(
    customerIds || []
  );

  return (
    <AutocompleteMultiple
      error={error || !!errorQuery}
      loading={loading}
      autoFocus={false}
      items={rows}
      getLabel={(item) =>
        item.firstName + " " + item.lastName + " - " + item.jobTitle
      }
      onChangeInput={(search) => {
        onInputChange(search);
      }}
      getValue={(item) => item.id}
      selectedItems={rows.filter((item) => customerIds?.includes(item.id))}
      onSelectItems={(items) => {
        onChange(items ? items.map((item) => item.id) : []);
      }}
      {...props}
    />
  );
};

export default AutoCompleteMultiCustomer;
