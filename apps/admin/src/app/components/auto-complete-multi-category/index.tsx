import { TextFieldProps } from "@mui/material";
import { FC } from "react";

import { AutocompleteMultiple } from "@pishroo/admin-components";
import useData from "./useDate";

export const AutoCompleteMultiCategory: FC<
  {
    categoryIds?: string[];
    onChange?: (categoryIds?: string[]) => void;
  } & TextFieldProps
> = ({ categoryIds, onChange = () => "", error, ...props }) => {
  const { loading, errorQuery, rows } = useData();

  return (
    <AutocompleteMultiple
      error={error || !!errorQuery}
      loading={loading}
      autoFocus={false}
      items={rows}
      getLabel={(item) => item.name}
      getValue={(item) => item.id}
      selectedItems={rows.filter((item) => categoryIds?.includes(item.id))}
      onSelectItems={(items) =>
        onChange(items ? items.map((item) => item.id) : [])
      }
      {...props}
    />
  );
};

export default AutoCompleteMultiCategory;
