import { useSuspenseQuery } from "@tanstack/react-query";

import postApi, { keys } from "src/api/post";
import { ReactQueryOptions } from "src/interfaces/global";

export const useGetPosts = <T>(options?: ReactQueryOptions<T>) => {
  //you can query on client
  // return useQuery({
  //   queryKey: keys.posts(),
  //   queryFn: async () => {
  //     return await postApi.getList();
  //   },
  //   ...options,
  // });
  //-----------------------------------

  //you can query on server
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
