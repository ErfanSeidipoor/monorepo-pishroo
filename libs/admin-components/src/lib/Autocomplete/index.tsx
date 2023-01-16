import {
  Autocomplete as MuiAutocomplete,
  CircularProgress,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

export type IAutocomplete<T extends {}> = {
  items?: T[];
  getLabel?: (t: T) => string;
  getValue?: (t: T) => string | number;
  onChangeInput?: (input: string) => void;
  onSelectItem?: (selectedItem: T | null) => void;
  selectedItem?: T;
  loading?: boolean;
} & TextFieldProps;

export const Autocomplete = <T extends {}>({
  items = [],
  getLabel = () => "",
  getValue = () => "",
  onChangeInput = () => {},
  onSelectItem = () => {},
  loading,
  selectedItem,
  onChange,
  disabled,
  ...props
}: IAutocomplete<T>) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <MuiAutocomplete
      id="asynchronous-demo"
      isOptionEqualToValue={(option, value) =>
        getValue(option) === getValue(value)
      }
      getOptionLabel={(option: T) => getLabel(option)}
      options={items}
      loading={loading}
      value={selectedItem}
      onChange={(e, value) => {
        onSelectItem(value);
        setInputValue(value ? getLabel(value) : "");
      }}
      inputValue={inputValue}
      onInputChange={(e, inputValue) => {
        onChangeInput(inputValue);
        setInputValue(inputValue);
      }}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...props}
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
