import {
  Autocomplete as MuiAutocomplete,
  CircularProgress,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

export type IAutocompleteMultiple<T extends {}> = {
  items?: T[];
  getLabel?: (t: T) => string;
  getValue?: (t: T) => string | number;
  onChangeInput?: (input: string) => void;
  onSelectItems?: (selectedItem: T[] | []) => void;
  selectedItems?: T[];
  loading?: boolean;
} & TextFieldProps;

export const AutocompleteMultiple = <T extends {}>({
  items = [],
  getLabel = () => "",
  getValue = () => "",
  onChangeInput = () => {},
  onSelectItems = () => {},
  loading,
  selectedItems,
  onChange,
  disabled,
  ...props
}: IAutocompleteMultiple<T>) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <MuiAutocomplete
      id="asynchronous-demo"
      multiple
      isOptionEqualToValue={(option, value) =>
        getValue(option) === getValue(value)
      }
      getOptionLabel={(option: T) => getLabel(option)}
      options={items}
      loading={loading}
      value={selectedItems || []}
      onChange={(e, value) => {
        onSelectItems(value);
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

export default AutocompleteMultiple;
