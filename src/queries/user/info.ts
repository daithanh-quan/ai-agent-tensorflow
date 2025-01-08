import { useQuery } from "@tanstack/react-query";

import authApi, { keys } from "src/api/auth";
import { ReactQueryOptions } from "src/interfaces/global";

export const useGetMe = <T>(options?: ReactQueryOptions<T>) => {
  //you can query on server
  return useQuery({
    queryKey: keys.me(),
    queryFn: async () => {
      const data = await authApi.getMe();
      return data?.data;
    },
    ...options,
  });
};
