import React, { useMemo, useState } from 'react';
import AppContext, {
  defaultCurrentUserContext,
  defaultSelectedBabyDetailsContext,
} from '../../context/AppContext';
import {
  HasChildrenProps,
  CurrentUserInterface,
  BabyList,
  BabyWithEvents,
  BabyEventType,
} from '../../types';

const AppContextProvider = ({ children }: HasChildrenProps): JSX.Element => {
  const [currentUser, setCurrentUserData] = useState<CurrentUserInterface>(
    defaultCurrentUserContext
  );
  const [babies, setBabiesList] = useState<BabyList>([]);
  const [selectedBabyDetails, setSelectedBabyDetails] = useState<BabyWithEvents>(
    defaultSelectedBabyDetailsContext
  );
  const [isBabyPanelLoading, setBabyPanelLoading] = useState<boolean>(false);
  const [isEventPanelLoading, setEventsPanelLoading] = useState<boolean>(false);
  const [selectedBabyId, setSelectedBabyId] = useState<string>('');
  const [displayedEventType, setDisplayedEventType] = useState<BabyEventType>('diapers');

  const appContextValue = useMemo(() => {
    return {
      userData: {
        currentUser,
        setCurrentUserData,
        resetCurrentUserData: () => setCurrentUserData(defaultCurrentUserContext),
      },
      babyData: {
        babies,
        setBabiesList,
        selectedBabyDetails,
        setSelectedBabyDetails,
      },
      displayData: {
        isBabyPanelLoading,
        isEventPanelLoading,
        setBabyPanelLoading,
        setEventsPanelLoading,
        selectedBabyId,
        setSelectedBabyId,
        displayedEventType,
        setDisplayedEventType,
      },
    };
  }, [
    currentUser,
    babies,
    selectedBabyDetails,
    selectedBabyId,
    isBabyPanelLoading,
    isEventPanelLoading,
    displayedEventType,
  ]);

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
