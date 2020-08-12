import React from 'react';
import AppContext, { defaultAppContext } from '../../context/AppContext';
import { HasChildrenProps } from '../../types';

const AppContextProvider = ({ children }: HasChildrenProps): JSX.Element => (
  <AppContext.Provider value={defaultAppContext}>{children}</AppContext.Provider>
);

export default AppContextProvider;
