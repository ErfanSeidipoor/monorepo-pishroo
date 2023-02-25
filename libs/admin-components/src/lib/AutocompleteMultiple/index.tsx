import {
  Autocomplete as MuiAutocomplete,
  Chip,
  CircularProgress,
  TextField,
  TextFieldProps,
  ChipProps,
} from "@mui/material";
import React, { useState } from "react";

export type IAutocompleteMultiple<T extends {}> = {
  items?: T[];
  getLabel?: (t: T) => string;
  getValue?: (t: T) => string | number;
  onChangeInput?: (input: string) => void;
  renderOption?: (it: T) => React.ReactNode;
  onSelectItems?: (selectedItem: T[] | []) => void;
  selectedItems?: T[];
  selectedItemChipProps?: (t: T) => ChipProps;
  loading?: boolean;
} & TextFieldProps;

export const AutocompleteMultiple = <T extends {}>({
  items = [],
  getLabel = () => "",
  getValue = () => "",
  onChangeInput = () => {},
  onSelectItems = () => {},
  renderOption,
  loading,
  selectedItems,
  selectedItemChipProps = () => ({}),
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
      renderOption={
        renderOption
          ? (props: object, option) => (
              <div {...props}>{renderOption(option)}</div>
            )
          : undefined
      }
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            label={getLabel(option)}
            {...selectedItemChipProps(option)}
          />
        ));
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
