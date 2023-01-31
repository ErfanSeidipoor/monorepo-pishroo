import { TextFieldProps, TextField as MuiTextField } from "@mui/material";

export type ITextField = TextFieldProps;

export const TextField: React.FC<ITextField> = ({ ...props }) => {
  return <MuiTextField {...props} />;
};
