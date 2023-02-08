// mui
import {
  // Link,
  Typography,
  BreadcrumbsProps as MuiBreadcrumbsProps,
  Breadcrumbs as MuiBreadcrumbs,
} from "@mui/material";
import { Link } from "react-router-dom";

export type IBreadcrumbs = MuiBreadcrumbsProps & {
  links?: {
    label: string;
    href?: string;
    color?: string;
  }[];
};

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({
  links = [],
  ...props
}) => {
  return (
    <MuiBreadcrumbs {...props}>
      {links.map(({ label, href, color }, index) =>
        index === links.length - 1 ? (
          <Typography key={label} color={color || "text.primary"}>
            {label}
          </Typography>
        ) : (
          <Link
            key={label}
            style={{ textDecoration: "none" }}
            color={color || "inherit"}
            to={href || "/"}
          >
            {label}
          </Link>
        )
      )}
    </MuiBreadcrumbs>
  );
};
