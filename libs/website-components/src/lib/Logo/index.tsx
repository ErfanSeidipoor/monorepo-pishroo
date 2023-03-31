import { FC } from "react";
import { LogoIcon } from "./icons";

import "../tailwind-imports.css";

export type ILogo = {
  width: string;
};

export const Logo: FC<ILogo> = ({ width }) => {
  return (
    <div style={{ width }}>
      <LogoIcon />
    </div>
  );
};

export default Logo;
