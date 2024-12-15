import { ColumnDef, Table } from "@tanstack/react-table";
import { TableOptions } from "@tanstack/table-core";

export interface TableProps {
  isLoading?: boolean;

  paginator?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
    showPreviousNext?: boolean;
  };

  wrapperClassName?: string;
  tableClassName?: string;
  tableHeaderClassName?: string;
  tableRowClassName?: string;
  tableHeadClassName?: string;
  tableBodyClassName?: string;
  tableCellClassName?: string;
  tableFooterClassName?: string;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];

  options?: TableOptions<TData>;
}

export interface HeaderTableProps<TData> {
  table: Table<TData>;
}

export interface BodyTableProps<TData, TValue> {
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];
}
