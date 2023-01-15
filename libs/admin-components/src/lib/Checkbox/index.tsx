import {
  FormGroup,
  FormControlLabelProps,
  Checkbox as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
  CheckboxProps,
} from "@mui/material";

export type ICheckbox = CheckboxProps & FormControlLabelProps;

export const Checkbox: React.FC<ICheckbox> = ({ ...props }) => {
  return (
    <FormGroup>
      <MuiFormControlLabel {...props} control={<MuiCheckbox {...props} />} />
    </FormGroup>
  );
};
