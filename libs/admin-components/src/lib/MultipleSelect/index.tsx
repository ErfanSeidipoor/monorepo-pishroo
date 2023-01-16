import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  SelectProps as MuiSelectProps,
} from "@mui/material";

export type IMultipleSelect<T extends {}> = {
  items?: T[];
  selectedItems?: T[];
  onSelectItems?: (selectedItems: T[]) => void;
  getLabel?: (t: T) => string;
  getValue?: (t: T) => string | number;
  helperText?: string;
} & MuiSelectProps;

export const MultipleSelect = <T extends {}>({
  items = [],
  selectedItems = [],
  onSelectItems = () => {},
  getLabel = () => "",
  getValue = () => "",
  helperText = "",
  fullWidth,
  labelId,
  label,
  color,
  onChange,
  ...props
}: IMultipleSelect<T>) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    const values = [...value];

    const selectedValue = values[values.length - 1].toString();
    const selectedItem = items.find(
      (item) => getValue(item).toString() === selectedValue
    );

    const found = selectedItems.find(
      (item) => getValue(item).toString() === selectedValue
    );

    if (found) {
      onSelectItems(
        selectedItems.filter(
          (item) => getValue(item).toString() !== selectedValue
        )
      );
    } else {
      if (selectedItem) {
        onSelectItems([...selectedItems, selectedItem]);
      }
    }
  };

  return (
    <FormControl fullWidth={fullWidth}>
      {label && (
        <InputLabel id={labelId} color={color}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        {...props}
        multiple
        label={label}
        renderValue={() =>
          selectedItems.map((item) => getLabel(item)).join(", ")
        }
        value={selectedItems.map((item) => getValue(item).toString())}
        defaultValue={[""]}
        onChange={handleChange}
        color={color}
      >
        {items.length &&
          items.map((item) => (
            <MenuItem value={getValue(item)}>
              <Checkbox
                color={color}
                checked={
                  selectedItems.findIndex(
                    (item_) => getValue(item_) === getValue(item)
                  ) > -1
                }
              />
              {getLabel(item)}
            </MenuItem>
          ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default MultipleSelect;
