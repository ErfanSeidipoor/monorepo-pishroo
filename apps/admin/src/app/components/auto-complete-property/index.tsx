import { TextFieldProps } from "@mui/material";
import { FC } from "react";

import { Autocomplete } from "@pishroo/admin-components";
import useData from "./useDate";

export const AutoCompleteProperty: FC<
  {
    propertyId?: string;
    onChange?: (id?: string) => void;
  } & TextFieldProps
> = ({ propertyId, onChange = () => "", error, ...props }) => {
  const { loading, errorQuery, rows, onInputChange } = useData(
    propertyId || ""
  );

  return (
    <Autocomplete
      error={error || !!errorQuery}
      loading={loading}
      autoFocus={false}
      items={rows}
      getLabel={(item) => item.name}
      getValue={(item) => item.id}
      onChangeInput={(input) => onInputChange(input)}
      onSelectItem={(item) => onChange(item?.id)}
      selectedItem={rows.find((item) => item.id === propertyId)}
      {...props}
    />
  );
};

export default AutoCompleteProperty;
