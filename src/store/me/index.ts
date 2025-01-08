import { create } from "zustand";

import cookie from "src/lib/cookie";

interface AuthStore {
  user: null | Response.User;
  setUser: (user: Response.User) => void;
}

export const useAuth = create<AuthStore>((set) => ({
  user: cookie.getMe() || null,
  setUser: (user: Response.User) => {
    set({ user });
  },
}));
