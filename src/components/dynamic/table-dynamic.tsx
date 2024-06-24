"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { toast } from "sonner";

const columnHelper = createColumnHelper();

type CustomeTableProps = {
  cols: any[];
  data: any;
  pageCount?: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  currentPage: number;
  pageSize: number;
  totalItems: number;
};

export const TableDynamic: React.FC<CustomeTableProps> = ({
  cols,
  data,
  pageCount,
  onPageChange,
  onPageSizeChange,
  currentPage,
  pageSize,
  totalItems,
}) => {
  const [inputValue, setInputValue] = useState(currentPage.toString());

  const columns = useMemo(
    () =>
      cols.map(({ id, header, enableSorting }) => ({
        ...columnHelper.accessor(id, {
          header,
        }),
        enableSorting,
      })),
    [cols],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
    pageCount,
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Мөрнүүд <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.columnDef.header?.toString()}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Card className="w-full">
        <div className="rounded-md p-5">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="">
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table?.getRowModel().rows?.length ? (
                table?.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className="py-3" key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
                    Илэрц байхгүй.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              onPageChange(1);
              setInputValue("1");
            }}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              onPageChange(currentPage - 1);
              setInputValue((currentPage - 1).toString());
            }}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              onPageChange(currentPage + 1);
              setInputValue((currentPage + 1).toString());
            }}
            disabled={currentPage === Math.ceil(totalItems / pageSize)}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              const lastPage = Math.ceil(totalItems / pageSize);
              onPageChange(lastPage);
              setInputValue(lastPage.toString());
            }}
            disabled={currentPage === Math.ceil(totalItems / pageSize)}
          >
            <ChevronsRight className="h-5 w-5" />
          </Button>
          <div className="4 flex items-center gap-2 pl-5 text-sm">
            <p>Хуудас сонголтууд: </p>
            <Select
              value={pageSize.toString()}
              onValueChange={(e) => {
                onPageSizeChange(Number(e));
              }}
            >
              <SelectTrigger className="w-24">
                <SelectValue placeholder={"Хуудасны сонголтууд"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Хуудаснууд</SelectLabel>
                  {[5, 10, 20, 50].map((size) => (
                    <SelectItem key={size} value={size.toString()}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 pl-5 text-sm">
            <p>Хуудасруу үсрэх:</p>
            <Input
              placeholder="Тоо"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                setInputValue(value);
                const page = Number(value);
                if (value === "" || (page > 0 && page <= Math.ceil(totalItems / pageSize))) {
                  if (value !== "") {
                    onPageChange(page);
                  }
                } else {
                  toast.error(`Хуудас ${value} байхгүй байна!`);
                }
              }}
              value={inputValue}
              type="number"
              className="w-24"
              max={Math.ceil(totalItems / pageSize)}
              min={1}
            />
          </div>
        </div>
        <div className="flex flex-col items-end text-sm text-muted-foreground">
          <p>Нийт мөр: {totalItems}</p>
          <p>Нийт хуудас: {Math.ceil(totalItems / pageSize)}</p>
          <p className="flex">Таны одоо байгаа хуудас: {currentPage}</p>
        </div>
      </div>
    </div>
  );
};
