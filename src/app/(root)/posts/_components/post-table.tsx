"use client";

import { PostColumn } from "../_columns";
import { useUsers } from "../_actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TableDynamic } from "@/components/dynamic/table-dynamic";
import { toast } from "sonner";

const PostTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const [pageSize, setPageSize] = useState(Number(searchParams.get("limit")) || 10);

  const { data, error, isLoading } = useUsers({
    pagination: {
      limit: pageSize,
      pageIndex: currentPage - 1,
    },
    sort: { field: "id", order: "ASC" },
  });

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      router.push(`${pathName}?page=${page}&limit=${pageSize}`);
    },
    [pageSize, pathName, router],
  );

  const handlePageSizeChange = useCallback(
    (size: number) => {
      setPageSize(size);
      router.push(`${pathName}?page=${currentPage}&limit=${size}`);
    },
    [currentPage, pathName, router],
  );

  if (error) {
    toast.error(error?.message || "Error while fetching data");
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full">
          <div className="flex justify-end">
            <Skeleton className="h-10 w-24 rounded-xl" />
          </div>
          <div className="flex flex-col justify-center gap-10 py-4">
            <Skeleton className="h-[450px] w-full rounded-xl" />
            <div className="flex justify-between">
              <div className="flex gap-3">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <TableDynamic
          cols={PostColumn}
          data={data?.result?.userList || []}
          pageCount={Math.ceil((data?.result?.totalPageItems || 1) / pageSize)}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={data?.result?.totalPageItems || 0}
        />
      )}
    </>
  );
};

export default PostTable;
