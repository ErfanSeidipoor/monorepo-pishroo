import { TextFieldProps } from "@mui/material";
import { FC } from "react";

import { Autocomplete } from "@pishroo/admin-components";
import useData from "./useDate";

export const AutoCompleteUser: FC<
  {
    userId?: string;
    onChange?: (id?: string) => void;
  } & TextFieldProps
> = ({ userId, onChange = () => "", error, ...props }) => {
  const { loading, errorQuery, rows, onInputChange } = useData(userId || "");

  return (
    <Autocomplete
      error={error || !!errorQuery}
      loading={loading}
      autoFocus={false}
      items={rows}
      getLabel={(item) => item.firstName + " " + item.lastName}
      getValue={(item) => item.id}
      onChangeInput={(input) => onInputChange(input)}
      onSelectItem={(item) => onChange(item?.id)}
      selectedItem={rows.find((item) => item.id === userId)}
      {...props}
    />
  );
};

export default AutoCompleteUser;
