import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import _ from "lodash";

import { DataTableProps, TableProps } from "./interface";

const useTable = <TData, TValue>({
  columns,
  data,
  ...rest
}: DataTableProps<TData, TValue> & TableProps) => {
  const table = useReactTable({
    ...rest.options,
    enableSorting: rest?.options?.enableSorting ?? false,
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row, index) => (_.get(row, "id") as string) || String(index),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return { table };
};

export default useTable;
