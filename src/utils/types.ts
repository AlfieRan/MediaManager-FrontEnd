export type Method = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

export interface ErrorResponse {
  successful: false;
  error: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}
