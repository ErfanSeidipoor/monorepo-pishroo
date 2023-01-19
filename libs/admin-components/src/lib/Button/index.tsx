import {
  ButtonProps,
  Button as MuiButton,
  CircularProgress,
} from "@mui/material";

export type IButton = ButtonProps & { label?: string; loading?: boolean };

export const Button: React.FC<IButton> = ({
  label = "",
  loading,
  disabled,
  endIcon,
  ...props
}) => {
  return (
    <MuiButton
      {...props}
      disabled={loading || disabled}
      endIcon={
        loading ? <CircularProgress size={10} color="secondary" /> : endIcon
      }
    >
      {label}
    </MuiButton>
  );
};
