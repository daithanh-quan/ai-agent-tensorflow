import { create } from "zustand";

interface PostStore {
  posts: Response.Post[];
  setPosts: (posts: Response.Post[]) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  setPosts: (posts: Response.Post[]) => {
    set({ posts });
  },
}));
