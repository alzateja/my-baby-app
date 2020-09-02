import { createContext, useContext } from 'react';
import {
  AppContextInterface,
  CurrentUserInterface,
  UserContextInterface,
  BabyContextInterface,
  DisplayContextInterface,
  BabyWithEvents,
} from '../types';

export const defaultCurrentUserContext: CurrentUserInterface = {
  // loggedIn: false,
  loggedIn: true,
  id: '5f4160b55219c41d86503ae2',
  // id: '',
  email: 'm,m,',
  // token: '',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDE2MGI1NTIxOWM0MWQ4NjUwM2FlMiIsImVtYWlsIjoidEB0LmNvbSIsImlhdCI6MTU5ODUwMDQxNiwiZXhwIjoxNTk4NTIyMDE2fQ.zf0m6eye_nCguzE22CZW7R4tVMRM_vpIHBPoU0sHWrM',
};

export const defaultUserContext: UserContextInterface = {
  currentUser: defaultCurrentUserContext,
  setCurrentUserData: () => console.log('setState method'),
  resetCurrentUserData: () => console.log('setState method'),
};

export const defaultSelectedBabyDetailsContext: BabyWithEvents = {
  name: '',
  dob: '',
  babyId: '',
  userId: '',
  feedings: [],
  diapers: [],
};

export const defaultBabyContext: BabyContextInterface = {
  babies: [],
  setBabiesList: () => console.log('setState method'),
  setSelectedBabyDetails: () => console.log('setState method'),
  selectedBabyDetails: defaultSelectedBabyDetailsContext,
};

export const defaultDisplayContext: DisplayContextInterface = {
  isBabyPanelLoading: true,
  isEventPanelLoading: true,
  selectedBabyId: '',
  displayedEventType: 'diapers',
  setDisplayedEventType: () => console.log('setState method'),
  setSelectedBabyId: () => console.log('setState method'),
  setBabyPanelLoading: () => console.log('setState method'),
  setEventsPanelLoading: () => console.log('setState method'),
};

export const defaultAppContext: AppContextInterface = {
  userData: defaultUserContext,
  babyData: defaultBabyContext,
  displayData: defaultDisplayContext,
};

const AppContext = createContext<AppContextInterface>(defaultAppContext);

export const useAppContext = (): AppContextInterface => useContext(AppContext);

export default AppContext;
