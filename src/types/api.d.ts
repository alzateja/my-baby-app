import { DiaperList, FeedingList } from './events.d';
import { BabyWithEvents } from './baby';

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

export type BabiesSuccessfulApiResponse = ?BabyList;

export type BabiesApiResponse = ApiResultError & BabiesSuccessfulApiResponse;

export interface BabyWithEventApiResponseApiResponse extends BabyWithEvents {
  error?: ApiErrorStatus;
}

export type FeedingsSuccessfulApiResponse = ?FeedingList;

export type DiapersSuccessfulApiResponse = ?DiaperList;

export type FeedingsApiResponse = ApiResultError & FeedingsSuccessfulApiResponse;

export type DiapersApiResponse = ApiResultError & DiapersSuccessfulApiResponse;

export type EventApiResponse = FeedingsApiResponse | DiapersApiResponse;
