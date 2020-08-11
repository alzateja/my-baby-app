import { createContext } from 'react';

interface AppContextInterface {
  loggedIn: boolean;
  userId: string;
}

export const defaultAppContext: AppContextInterface = {
  loggedIn: false,
  userId: '',
};

const AppContext = createContext<AppContextInterface | null>(defaultAppContext);

export default AppContext;
