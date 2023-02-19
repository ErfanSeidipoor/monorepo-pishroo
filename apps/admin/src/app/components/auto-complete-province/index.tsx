import { TextFieldProps } from "@mui/material";
import { FC } from "react";

import { Autocomplete } from "@pishroo/admin-components";
import useData from "./useDate";

export const AutoCompleteProvince: FC<
  {
    provinceId?: string;
    onChange?: (id?: string) => void;
  } & TextFieldProps
> = ({ provinceId, onChange = () => "", error, ...props }) => {
  const { loading, errorQuery, rows, onInputChange } = useData(
    provinceId || ""
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
      selectedItem={rows.find((item) => item.id === provinceId)}
      {...props}
    />
  );
};

export default AutoCompleteProvince;
