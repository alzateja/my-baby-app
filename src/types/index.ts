import { History } from 'history';
import { ReactNode } from 'react';

export type children = ReactNode;

export interface HasChildrenProps {
  children: children;
}

export interface HasHistoryProps {
  history: History;
}

export type HasChildrenAndHistoryProps = HasHistoryProps & HasChildrenProps;

export interface Baby {
  babyId: string;
  name: string;
  dob: string;
  userId: string;
}

export interface BabyList {
  babies: Baby[];
}

export interface UserContextInterface {
  loggedIn: boolean;
  id: string;
  email: string;
  token: string;
}

export interface LoadingContextInterface {
  babiesLoading: boolean;
  eventsLoading: boolean;
}

export interface BabyContextInterface {
  currentBabyId: string;
  babies: Baby[];
}

export interface AppContextInterface {
  userData: UserContextInterface;
  babyData: BabyContextInterface;
  loadingData: LoadingContextInterface;
  setUserData: any;
  setBabyData: any;
  resetUserData: any;
  errorMessage: string;
  setErrorMessage: any;
  setBabiesLoading: any;
  setCurrentBabyId: any;
  setEventsLoading: any;
}

export interface ApiErrorStatus {
  statusCode: number;
  name: string;
  message: string;
}

export interface ApiResultError {
  error?: ApiErrorStatus;
}

export interface RegistrationApiResponse {
  id?: string;
  email?: string;
  error?: ApiErrorStatus;
}

export interface LoginApiResponse {
  id?: string;
  token?: string;
  error?: ApiErrorStatus;
}

export interface BabiesApiResponse {
  babies?: BabyList;
  error?: ApiErrorStatus;
}
