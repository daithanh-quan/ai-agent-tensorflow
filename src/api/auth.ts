import ApiService from "./baseAxios/apiService";

export const keys = {
  signIn: () => ["/v1/auth/sign-in"] as const,
  me: () => ["/v1/me"] as const,
  posts: () => ["posts"] as const,
};

class Auth extends ApiService {
  signIn = async (data: Payload.Login) => {
    return await this.post<Payload.Login, Response.SignIn>(
      keys.signIn()[0],
      data,
    );
  };

  getMe = async () => {
    return await this.get<Response.UserResponse>(keys.me()[0]);
  };
}

const authApi = new Auth();

export default authApi;
