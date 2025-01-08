declare namespace Response {
  export type Post = {
    id: number;
    title: string;
    body: string;
  };

  export type User = {
    id: string;
    name: string;
    surname: string;
    role: string;
  };

  export type SignIn = {
    data: {
      token: string;
    };
  };

  export type UserResponse = {
    data: User;
  };

  export type PostList = Post[];
}
