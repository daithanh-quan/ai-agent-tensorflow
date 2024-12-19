import ApiService from "./baseAxios/apiService";

export const keys = {
  posts: () => ["posts"] as const,
};

class Post extends ApiService {
  getList = async () => {
    return await this.get<Response.PostList>(keys.posts()[0]);
  };
}

const postApi = new Post();

export default postApi;
