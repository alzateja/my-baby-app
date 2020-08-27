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
}

export interface UserContextInterface {
  loggedIn: boolean;
  id: string;
  email: string;
  token: string;
}

export interface AppContextInterface {
  user: UserContextInterface;
  babies: any[];
  setUserData: any;
  setBabyData: any;
  resetUserData: any;
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
