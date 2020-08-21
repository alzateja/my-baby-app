import React, { useState, useMemo, useContext } from 'react';
import AppContext, { defaultUserContext } from '../../context/AppContext';
import { HasChildrenProps } from '../../types';

// export const useAppContext = useContext(AppContext);

const AppContextProvider = ({ children }: HasChildrenProps): JSX.Element => {
  const [userData, updateUserData] = useState(defaultUserContext);
  const [babies, setBabyData] = useState([]);

  const appContextValue = useMemo(() => {
    return {
      user: userData,
      setUserData: updateUserData,
      babies: babies,
      setBabyData: setBabyData,
      resetUserData: () => updateUserData(defaultUserContext),
    };
  }, [userData, babies]);

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
