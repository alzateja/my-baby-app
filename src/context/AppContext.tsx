import { createContext, Dispatch, SetStateAction } from 'react';

interface UserContextInterface {
  loggedIn: boolean;
  userId: string;
  userEmail: string;
  token: string;
}

interface AppContextInterface {
  user: UserContextInterface;
  babies: any[];
  setUserData: Dispatch<SetStateAction<UserContextInterface>>;
  setBabyData: Dispatch<SetStateAction<never[]>>;
  resetUserData: () => void;
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

const AppContext = createContext<AppContextInterface | null>(defaultAppContext);

export default AppContext;
