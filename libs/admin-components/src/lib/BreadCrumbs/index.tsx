// mui
import {
  Link,
  Typography,
  BreadcrumbsProps as MuiBreadcrumbsProps,
  Breadcrumbs as MuiBreadcrumbs,
} from "@mui/material";

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
          <Typography color={color || "text.primary"}>{label}</Typography>
        ) : (
          <Link underline="hover" color={color || "inherit"} href={href || "/"}>
            {label}
          </Link>
        )
      )}
    </MuiBreadcrumbs>
  );
};
