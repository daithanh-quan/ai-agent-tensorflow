"use client";

import React, { Fragment } from "react";

import { ColumnDef, TableOptions } from "@tanstack/react-table";
import { toast } from "sonner";

import Table from "src/components/tables";
import { Button } from "src/components/ui/button";
import { Checkbox } from "src/components/ui/checkbox";
import Modal from "src/components/ui/modal";
import { useHistory } from "src/hooks/useHistory";

// import { useQuery } from "src/hooks/useQuery";

export default function Home() {
  const { push, reset, replace } = useHistory();
  // const { name } = useQuery();
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<unknown, unknown>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      enableSorting: true,
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
  ];

  // const data = [
  //   {
  //     id: "728ed52f",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   {
  //     id: "489e1d42",
  //     amount: 125,
  //     status: "processing",
  //     email: "example@gmail.com",
  //   },
  //   {
  //     id: "728ed52fe",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   {
  //     id: "489e1d42a",
  //     amount: 125,
  //     status: "processing",
  //     email: "example@gmail.com",
  //   },
  //   {
  //     id: "728ed52fa",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   {
  //     id: "489e1d42b",
  //     amount: 125,
  //     status: "processing",
  //     email: "example@gmail.com",
  //   },
  //   {
  //     id: "728ed52fv",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   {
  //     id: "489e1d42c",
  //     amount: 125,
  //     status: "processing",
  //     email: "example@gmail.com",
  //   },
  //   {
  //     id: "728ed52fc",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   {
  //     id: "489e1d42d",
  //     amount: 125,
  //     status: "processing",
  //     email: "example@gmail.com",
  //   },
  //   {
  //     id: "728ed52fq",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   {
  //     id: "489e1d42e",
  //     amount: 125,
  //     status: "processing",
  //     email: "example@gmail.com",
  //   },
  // ];

  return (
    <Fragment>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Button>Hello</Button>
        <Button onClick={() => toast.success("toast")}>Toast</Button>
        <Button
          onClick={() =>
            push({
              pathName: "/",
              params: {
                name: "123",
              },
            })
          }
        >
          Push history
        </Button>
        <Button
          onClick={() =>
            replace({
              pathName: "/",
            })
          }
        >
          Replace history
        </Button>
        <Button onClick={() => reset()}>Reset</Button>
        <Modal
          closeOutSide
          title="abcd"
          content={({ open, setOpen }) => (
            <Button className="w-full" onClick={() => setOpen(false)}>
              Close Modal
            </Button>
          )}
          trigger={<Button>Open Modal</Button>}
        />
      </div>
      <div>
        <Table
          tableHeadClassName="bg-purple-500 text-white"
          data={[]}
          columns={columns}
          options={
            {
              state: {
                rowSelection,
              },
              onRowSelectionChange: setRowSelection,
            } as TableOptions<any>
          }
        />
      </div>
    </Fragment>
  );
}
