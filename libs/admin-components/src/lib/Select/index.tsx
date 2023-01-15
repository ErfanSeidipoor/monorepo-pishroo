// mui
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from "@mui/material";

export type ISelect<T extends {}> = {
  items?: T[];
  getLabel?: (t: T) => string;
  getValue?: (t: T) => string | number;
  withNone?: boolean;
  helperText?: string;
} & MuiSelectProps;

export const Select = <T extends {}>({
  items = [],
  withNone = false,
  getLabel = () => "",
  getValue = () => "",
  helperText = "",
  fullWidth,
  labelId,
  label,
  ...props
}: ISelect<T>) => {
  return (
    <FormControl fullWidth={fullWidth}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <MuiSelect {...props}>
        {withNone && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}
        {items.length &&
          items.map((item) => (
            <MenuItem value={getValue(item)}>{getLabel(item)}</MenuItem>
          ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
