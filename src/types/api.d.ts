export interface ApiErrorStatus {
  statusCode: number;
  name: string;
  message: string;
}

export interface ApiResultError {
  error?: ApiErrorStatus;
}

export interface SuccessfulRegistrationApiResponse {
  id?: string;
  email?: string;
}

export interface SuccessfulLoginApiResponse {
  id?: string;
  token?: string;
}

export type RegistrationApiResponse = ApiResultError & SuccessfulRegistrationApiResponse;

export type LoginApiResponse = ApiResultError & SuccessfulLoginApiResponse;

export interface BabiesApiResponse {
  babies?: BabyList;
  error?: ApiErrorStatus;
}
