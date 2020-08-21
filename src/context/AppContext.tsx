import { createContext, useContext } from 'react';

interface UserContextInterface {
  loggedIn: boolean;
  userId: string;
  userEmail: string;
  token: string;
}

interface AppContextInterface {
  user: UserContextInterface;
  babies: any[];
  setUserData: any;
  setBabyData: any;
  resetUserData: any;
}
export const defaultUserContext: UserContextInterface = {
  loggedIn: false,
  userId: '',
  userEmail: '',
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
