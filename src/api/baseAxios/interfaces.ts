export interface ErrorResponse {
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

export interface SessionData {
  token?: string;
}
