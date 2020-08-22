import { ReactNode } from 'react';

export type children = ReactNode;

export interface HasChildrenProps {
  children: children;
}

export interface Baby {
  name: string;
  dob: Date;
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
