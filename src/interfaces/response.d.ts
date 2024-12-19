declare namespace Response {
  export type Post = {
    id: number;
    title: string;
    body: string;
  };

  export type PostList = Post[];
}
