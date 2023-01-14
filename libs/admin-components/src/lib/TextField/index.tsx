import { TextFieldProps, TextField as MuiTextField } from "@mui/material";

export type ITextField = TextFieldProps & {
  label?: string;
  subLabel?: string;
  tooltip?: string;
};

export const TextField: React.FC<ITextField> = ({ ...props }) => {
  return <MuiTextField {...props} />;
};
