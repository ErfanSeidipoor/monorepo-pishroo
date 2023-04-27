import { FC } from "react";

import useData from "./useDate";
import Autocomplete from "../auto-complete";

export const AutoCompleteProvince: FC<{
  provinceId?: string;
  onChange?: (id?: string) => void;
  placeholder?: string;
}> = ({ provinceId, onChange = () => "", ...props }) => {
  const { loading, rows, onInputChange } = useData(provinceId || "");

  return (
    <Autocomplete
      loading={loading}
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
