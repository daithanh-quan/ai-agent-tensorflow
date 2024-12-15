import React from "react";
import { flexRender } from "@tanstack/react-table";
import { HeaderTableProps, TableProps } from "src/components/tables/interface";
import { cn } from "src/lib/utils";
import {
  TableHeader,
  TableCell,
  TableRow,
  TableHead,
} from "src/components/ui/table";

type Props<TData> = {} & HeaderTableProps<TData> &
  Pick<
    TableProps,
    "tableHeadClassName" | "tableHeaderClassName" | "tableRowClassName"
  >;

const Thead = <TData,>({
  table,
  tableRowClassName,
  tableHeaderClassName,
  tableHeadClassName,
}: Props<TData>) => {
  return (
    <TableHeader className={cn("overflow-hidden ", tableHeaderClassName)}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} className={cn(tableRowClassName)}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id} className={cn(tableHeadClassName)}>
                {header.isPlaceholder ? null : (
                  <div
                    className={
                      header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : ""
                    }
                    onClick={header.column.getToggleSortingHandler()}
                    title={
                      header.column.getCanSort()
                        ? header.column.getNextSortingOrder() === "asc"
                          ? "Sort ascending"
                          : header.column.getNextSortingOrder() === "desc"
                          ? "Sort descending"
                          : "Clear sort"
                        : undefined
                    }
                  >
                    {
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      ) as string
                    }
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default Thead;
