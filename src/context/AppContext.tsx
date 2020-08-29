import { createContext, useContext } from 'react';
import {
  AppContextInterface,
  UserContextInterface,
  BabyContextInterface,
  LoadingContextInterface,
} from '../types';

export const defaultUserContext: UserContextInterface = {
  // loggedIn: false,
  loggedIn: true,
  id: '5f4160b55219c41d86503ae2',
  // id: '',
  email: 'm,m,',
  // token: '',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDE2MGI1NTIxOWM0MWQ4NjUwM2FlMiIsImVtYWlsIjoidEB0LmNvbSIsImlhdCI6MTU5ODUwMDQxNiwiZXhwIjoxNTk4NTIyMDE2fQ.zf0m6eye_nCguzE22CZW7R4tVMRM_vpIHBPoU0sHWrM',
};

export const defaultBabyContext: BabyContextInterface = {
  babies: [],
  currentBabyId: '',
};

export const defaultLoadingContext: LoadingContextInterface = {
  babiesLoading: true,
  eventsLoading: true,
};

export const defaultAppContext: AppContextInterface = {
  userData: defaultUserContext,
  babyData: defaultBabyContext,
  loadingData: defaultLoadingContext,
  errorMessage: '',
  setEventsLoading: () => console.log('set event loading Message'),
  setErrorMessage: () => console.log('set Error Message'),
  setUserData: () => console.log('update User Data'),
  setBabyData: () => console.log('update Baby Data'),
  setBabiesLoading: () => console.log('set Baby Panel Loading'),
  setCurrentBabyId: () => console.log('set current baby'),
  resetUserData: () => console.log('update Baby Data'),
};

const AppContext = createContext<AppContextInterface>(defaultAppContext);

export const useAppContext = (): AppContextInterface => useContext(AppContext);

export default AppContext;
