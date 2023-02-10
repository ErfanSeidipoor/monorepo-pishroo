import {
  FormGroup,
  Checkbox as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
  CheckboxProps,
} from "@mui/material";

export type ICheckbox = CheckboxProps & { label: string };

export const Checkbox: React.FC<ICheckbox> = ({ label, ...props }) => {
  return (
    <FormGroup>
      <MuiFormControlLabel
        label={label}
        sx={{ pl: 1 }}
        control={<MuiCheckbox {...props} />}
      />
    </FormGroup>
  );
};
