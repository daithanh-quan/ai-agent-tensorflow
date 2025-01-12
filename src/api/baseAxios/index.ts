import { redirect } from "next/navigation";

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie } from "cookies-next/client";

import cookie from "src/lib/cookie";
import { decrypt } from "src/utils/cryptoDecode";

export const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
} as AxiosRequestConfig);

// Add request interceptor to include token
baseAxios.interceptors.request.use(async (config) => {
  try {
    const token = getCookie("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${decrypt(token)}`;
    }

    return config;
  } catch (error) {
    console.error("Error in axios interceptor:", error);
    return config;
  }
});

// Interceptor cho response
baseAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    switch (response.status) {
      case 200: // OK
      case 201: // Created
      case 204: // No Content
        return response.data;
      default:
        return response.data;
    }
  },
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          cookie.signOut();

          redirect("/login");

          break;
        case 400:
        case 403:
        case 404:
        case 500:
        case 502:
        case 503:
        case 504:
          return Promise.reject(error.response.data);
        default:
          return Promise.reject(error.response.data);
      }

      // @ts-ignore
      return Promise.reject(error?.response.data);
    } else if (error.request) {
      return Promise.reject(error.request);
    } else {
      return Promise.reject(error.message);
    }
  },
);

export default baseAxios;
