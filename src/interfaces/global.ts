import { UseQueryOptions } from "@tanstack/react-query";

export type ReactQueryOptions<T> = Omit<
  UseQueryOptions<any, unknown, T>,
  "queryKey" | "queryFn"
>;
