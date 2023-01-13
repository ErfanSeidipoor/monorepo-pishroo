import { ReactNode } from "react";

// mui
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  LinearProgress,
} from "@mui/material";

// locals
import { useStyles } from "./style";

export interface ITableColumn<C> {
  name: string;
  label?: string;
  sort?: boolean;
  cell: (item: C, index: number) => ReactNode;
}

export interface IColumnSortTable {
  columnName: string;
  direction: SortEnum;
}
interface ITable<T extends {}> {
  rows: T[];
  columns: ITableColumn<T>[];
  loading?: boolean;
  columnSort?: IColumnSortTable;
  onColumnSortClick?: (columnSortTable?: IColumnSortTable) => void;
}

export const Table = <T extends {}>({
  rows = [],
  columns = [],
  loading = false,
  columnSort,
  onColumnSortClick = () => {},
}: ITable<T>) => {
  const classes = useStyles();

  const renderHeader = () => {
    return (
      <TableHead classes={{ root: classes.tableHeader }}>
        <TableRow>
          {columns.map((column, index) =>
            column.sort ? (
              <TableCell
                align="right"
                key={"table+column" + column.label + index}
              >
                <TableSortLabel
                  direction={
                    (columnSort &&
                      columnSort.columnName === column.name &&
                      convertSortEnumToLowerCase(columnSort.direction)) ||
                    undefined
                  }
                  active={columnSort && columnSort.columnName === column.name}
                  onClick={() => {
                    if (loading) return;
                    if (
                      columnSort &&
                      columnSort.columnName === column.name &&
                      columnSort.direction === SortEnum.ASC
                    )
                      return onColumnSortClick({
                        columnName: column.name,
                        direction: SortEnum.DESC,
                      });
                    else if (
                      columnSort &&
                      columnSort.columnName === column.name &&
                      columnSort.direction === SortEnum.DESC
                    )
                      return onColumnSortClick();
                    else
                      return onColumnSortClick({
                        columnName: column.name,
                        direction: SortEnum.ASC,
                      });
                  }}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ) : (
              <TableCell
                align="right"
                key={"table+column" + column.label + index}
              >
                {column.label}
              </TableCell>
            )
          )}
        </TableRow>
      </TableHead>
    );
  };

  const renderBody = () => {
    return (
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow
            key={"table+row" + rowIndex}
            classes={{ root: classes.tableRow }}
            selected={true}
          >
            {columns.map((column, columnIndex) => (
              <TableCell
                key={"table+row" + rowIndex + "-column-" + columnIndex}
                align="right"
              >
                {column.cell(row, rowIndex)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );
  };

  const renderLoading = () => {
    return (
      <div className={classes.loadingContainer}>
        <LinearProgress classes={{ root: classes.loading }} />
        <LinearProgress classes={{ root: classes.loading }} />
        <LinearProgress classes={{ root: classes.loading }} />
        <LinearProgress classes={{ root: classes.loading }} />
      </div>
    );
  };

  return (
    <TableContainer classes={{ root: classes.tableContainer }}>
      <MuiTable classes={{ root: classes.table }}>
        {renderHeader()}
        {!loading && renderBody()}
      </MuiTable>
      {loading && renderLoading()}
    </TableContainer>
  );
};

export default Table;

export enum SortEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export const convertSortEnumToLowerCase = (
  sortEnum: SortEnum
): "asc" | "desc" => {
  return sortEnum.toLowerCase() as "asc" | "desc";
};

// https://storybook.js.org/blog/material-ui-in-storybook/
