import { createContext, useContext } from 'react';
import { AppContextInterface, UserContextInterface } from '../types';

export const defaultUserContext: UserContextInterface = {
  loggedIn: false,
  id: '',
  email: '',
  token: '',
};

export const defaultAppContext: AppContextInterface = {
  user: defaultUserContext,
  babies: [],
  setUserData: () => console.log('update User Data'),
  setBabyData: () => console.log('update Baby Data'),
  resetUserData: () => console.log('update Baby Data'),
};

const AppContext = createContext<AppContextInterface>(defaultAppContext);

export const useAppContext = (): AppContextInterface => useContext(AppContext);

export default AppContext;
