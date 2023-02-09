import { Pagination as MuiPagination, PaginationProps } from "@mui/material";

export type IPagination = PaginationProps & {
  onPageSelect: (page: number) => void;
  page?: number;
  count?: number;
};

export const Pagination: React.FC<IPagination> = ({
  onPageSelect,
  page = 1,
  count = 1,
  ...props
}) => {
  return (
    <MuiPagination
      onChange={(e, page) => {
        onPageSelect(page);
      }}
      {...props}
      page={page}
      count={count}
    />
  );
};
