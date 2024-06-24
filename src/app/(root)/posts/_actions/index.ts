import { BASE_URL } from "@/constants";
import axios from "axios";
import useSWR from "swr";
import { useMemo } from "react";

type User = {
  result: { totalPageItems: number; userList: any[] };
};

interface Pagination {
  limit?: number;
  pageIndex?: number;
}

interface Sort {
  field?: string;
  order?: "ASC" | "DESC";
}

interface UseUsersOptions {
  pagination?: Pagination;
  sort?: Sort;
}

const fetcher = async (url: string) => {
  const [apiUrl, options] = JSON.parse(url);
  const response = await axios.post(apiUrl, options);
  return response.data;
};

export function useUsers({
  pagination: { limit = 10, pageIndex = 0 } = {},
  sort: { field = "id", order = "ASC" } = {},
}: UseUsersOptions = {}) {
  const options = useMemo(
    () => ({
      pageNumber: pageIndex + 1,
      pageLimit: limit,
      orgName: "",
      username: "",
      status: "",
      all: false,
      sortField: field,
      sortOrder: order,
    }),
    [limit, pageIndex, field, order],
  );

  const key = useMemo(
    () => JSON.stringify([`${BASE_URL}/restapi/v1/listUser/get`, options]),
    [options],
  );

  const { data, error, isLoading } = useSWR<User>(key, fetcher);

  return {
    data,
    isLoading,
    error,
  };
}
