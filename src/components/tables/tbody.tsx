import React from "react";

import { flexRender } from "@tanstack/react-table";
import { Inbox } from "lucide-react";

import { BodyTableProps, TableProps } from "src/components/tables/interface";
import { TableBody, TableCell, TableRow } from "src/components/ui/table";
import { cn } from "src/lib/utils";

type Props<TData, TValue> = {} & BodyTableProps<TData, TValue> &
  Pick<
    TableProps,
    | "tableBodyClassName"
    | "tableRowClassName"
    | "tableCellClassName"
    | "isLoading"
  >;

const Tbody = <TData, TValue>({
  table,
  columns,
  isLoading,
  tableRowClassName,
  tableBodyClassName,
  tableCellClassName,
}: Props<TData, TValue>) => {
  return (
    <TableBody className={cn(tableBodyClassName)}>
      {isLoading && (
        <TableRow className={cn(tableRowClassName)}>
          <TableCell
            colSpan={columns.length}
            className={cn("text-center", tableCellClassName)}
          >
            <div role="status" aria-label="loading">
              <svg
                className="w-6 h-6 stroke-indigo-600 animate-spin "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9023_61563)">
                  <path
                    d="M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444"
                    stroke="stroke-current"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    className="my-path"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_9023_61563">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </TableCell>
        </TableRow>
      )}
      {table.getRowModel().rows?.length && !isLoading ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
            className={cn(tableRowClassName)}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className={cn(tableCellClassName)}>
                {
                  flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext(),
                  ) as React.ReactNode
                }
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow className={cn(tableRowClassName)}>
          <TableCell
            colSpan={columns.length}
            className={cn("h-[500px] text-center", tableCellClassName)}
          >
            <div className="flex items-center justify-center flex-wrap">
              <div className="flex justify-center mb-4">
                <Inbox />
              </div>
              <div className="w-full text-center">No results.</div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default Tbody;
