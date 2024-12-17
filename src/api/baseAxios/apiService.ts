import { AxiosError } from "axios";

import baseAxios from "./index";
import { ErrorResponse } from "./interfaces";

class ApiService {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async get<T>(params?: Record<string, any>): Promise<T> {
    try {
      return await baseAxios.get(this.endpoint, { params });
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async getById<T>(
    id: string | number,
    params?: Record<string, any>,
  ): Promise<T> {
    try {
      return await baseAxios.get(`${this.endpoint}/${id}`, { params });
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async post<T, R = T>(data: T): Promise<R> {
    try {
      return await baseAxios.post(this.endpoint, data);
    } catch (error) {
      return this.handleError<R>(error);
    }
  }

  async put<T, R = T>(id: string | number, data: T): Promise<R> {
    try {
      return await baseAxios.put(`${this.endpoint}/${id}`, data);
    } catch (error) {
      return this.handleError<R>(error);
    }
  }

  async patch<T, R = T>(id: string | number, data: Partial<T>): Promise<R> {
    try {
      return await baseAxios.patch(`${this.endpoint}/${id}`, data);
    } catch (error) {
      return this.handleError<R>(error);
    }
  }

  async delete<R = any>(id: string | number): Promise<R> {
    try {
      return await baseAxios.delete(`${this.endpoint}/${id}`);
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
