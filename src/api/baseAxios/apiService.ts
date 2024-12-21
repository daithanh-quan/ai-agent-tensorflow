import { AxiosError } from "axios";

import baseAxios from "./index";
import { ErrorResponse } from "./interfaces";

class ApiService {
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    try {
      return await baseAxios.get(endpoint, { params });
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async getById<T>(
    endpoint: string,
    id: string | number,
    params?: Record<string, any>,
  ): Promise<T> {
    try {
      return await baseAxios.get(`${endpoint}/${id}`, { params });
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async post<T, R = T>(endpoint: string, data: T): Promise<R> {
    try {
      return await baseAxios.post(endpoint, data);
    } catch (error) {
      return this.handleError<R>(error);
    }
  }

  async put<T, R = T>(
    endpoint: string,
    id: string | number,
    data: T,
  ): Promise<R> {
    try {
      return await baseAxios.put(`${endpoint}/${id}`, data);
    } catch (error) {
      return this.handleError<R>(error);
    }
  }

  async patch<T, R = T>(
    endpoint: string,
    id: string | number,
    data: Partial<T>,
  ): Promise<R> {
    try {
      return await baseAxios.patch(`${endpoint}/${id}`, data);
    } catch (error) {
      return this.handleError<R>(error);
    }
  }

  async delete<R = any>(endpoint: string, id: string | number): Promise<R> {
    try {
      return await baseAxios.delete(`${endpoint}/${id}`);
    } catch (error) {
      return this.handleError<R>(error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private handleError<T>(error: any): never {
    if (error instanceof AxiosError) {
      const errorResponse: ErrorResponse = {
        message: error.response?.data?.message || error.message,
        code: error.response?.data?.code,
        errors: error.response?.data?.errors,
        statusCode: error.response?.status,
      };

      // throw error to React Query
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw errorResponse;
    }

    // if error is not AxiosError
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw {
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
    };
  }
}

export default ApiService;
