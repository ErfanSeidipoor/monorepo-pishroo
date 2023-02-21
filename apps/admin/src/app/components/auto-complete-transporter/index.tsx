import { TextFieldProps } from "@mui/material";
import { FC } from "react";

import { Autocomplete } from "@pishroo/admin-components";
import useData from "./useDate";

export const AutoCompleteTransporter: FC<
  {
    transporterId?: string;
    onChange?: (id?: string) => void;
  } & TextFieldProps
> = ({ transporterId, onChange = () => "", error, ...props }) => {
  const { loading, errorQuery, rows, onInputChange } = useData(
    transporterId || ""
  );

  return (
    <Autocomplete
      error={error || !!errorQuery}
      loading={loading}
      autoFocus={false}
      items={rows}
      getLabel={(item) =>
        item.name + " - " + item.city.name + " - " + item.city.province.name
      }
      getValue={(item) => item.id}
      onChangeInput={(input) => onInputChange(input)}
      onSelectItem={(item) => onChange(item?.id)}
      selectedItem={rows.find((item) => item.id === transporterId)}
      {...props}
    />
  );
};

export default AutoCompleteTransporter;
