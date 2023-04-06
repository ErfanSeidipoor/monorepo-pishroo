import { FC } from "react";
import cls from "classnames";

export type IEmailInput = {
  value?: string;
  buttonTitle?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
};

export const EmailInput: FC<IEmailInput> = ({
  value = "",
  buttonTitle = "Call Me",
  placeholder = "please enter your email",
  onChange = () => ({}),
  onClick = () => ({}),
}) => {
  return (
    <div
      className={cls(
        "h-16",
        "rounded-lg",
        "overflow-hidden",
        "relative",
        "bg-white"
      )}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cls(
          "bock",
          "w-full",
          "h-full",
          "m-0",
          "focus:border-0",
          "outline-0",
          "mx-2",
          "text-lg",
          "text-gray-600"
        )}
      />

      <button
        className={cls(
          "btn",
          "block",
          "absolute",
          "left-1",
          "top-1",
          "bg-primary",
          "h-14",
          "rounded-lg",
          "p-3",
          "text-white"
        )}
        onClick={onClick}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default EmailInput;
