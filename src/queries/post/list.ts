import { useSuspenseQuery } from "@tanstack/react-query";

import postApi, { keys } from "src/api/post";
import { ReactQueryOptions } from "src/interfaces/global";

//you can query on server
export const useGetPosts = <T>(options?: ReactQueryOptions<T>) => {
  return useSuspenseQuery({
    queryKey: keys.posts(),
    queryFn: async () => {
      return await postApi.getList();
    },
    ...options,
  });
};
