import { cookies } from "next/headers";
import Router from "next/router";

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getIronSession } from "iron-session";

import { SessionData } from "src/api/baseAxios/interfaces";

export const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
} as AxiosRequestConfig);

const sessionOptions = {
  password: process.env.SESSION_PASSWORD!,
  cookieName: "myapp_session",
  // Add any other iron-session configuration
};

// Add request interceptor to include token
baseAxios.interceptors.request.use(async (config) => {
  try {
    // Retrieve token from iron-session
    const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions,
    );

    if (session.token) {
      config.headers["Authorization"] = `Bearer ${session.token}`;
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
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");

          Router.push("/login");

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

      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject(error.request);
    } else {
      return Promise.reject(error.message);
    }
  },
);

export default baseAxios;
