import React, { useMemo, useState } from 'react';
import AppContext, { defaultUserContext } from '../../context/AppContext';
import { HasChildrenProps } from '../../types';

const AppContextProvider = ({ children }: HasChildrenProps): JSX.Element => {
  const [userData, updateUserData] = useState(defaultUserContext);
  const [babies, setBabyData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [babiesLoading, setBabiesLoading] = useState(false);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [currentBabyId, setCurrentBabyId] = useState('');

  const appContextValue = useMemo(() => {
    return {
      userData: userData,
      setUserData: updateUserData,
      babyData: {
        babies,
        currentBabyId,
      },
      loadingData: {
        babiesLoading,
        eventsLoading,
      },
      setBabyData,
      setErrorMessage,
      setBabiesLoading,
      errorMessage,
      setCurrentBabyId,
      setEventsLoading,
      resetUserData: () => updateUserData(defaultUserContext),
    };
  }, [userData, currentBabyId, babies, errorMessage, babiesLoading, eventsLoading]);

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
