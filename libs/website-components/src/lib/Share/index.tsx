import { FC, useState } from "react";
import cls from "classnames";
import { ShareIcon } from "./icons";
import "../tailwind-imports.css";

export type IShare = {
  url: string;
};

export const Share: FC<IShare> = ({ url }) => {
  const [isCoppied, setIsCoppied] = useState(false);

  const onClick = () => {
    const textField = document.createElement("textarea");
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setIsCoppied(true);
    setTimeout(() => {
      setIsCoppied(false);
    }, 5000);
  };

  return (
    <button
      onClick={onClick}
      className={cls(
        "rounded-full",
        "p-1",
        "btn",
        isCoppied ? "bg-orange-500" : "bg-white"
      )}
    >
      {<ShareIcon />}
    </button>
  );
};

export default Share;
