import { Baby, BabyWithEvents } from './baby';
import { BabyEventType } from './events';

export interface CurrentUserInterface {
  loggedIn: boolean;
  id: string;
  email: string;
  token: string;
}

export interface UserContextInterface {
  currentUser: CurrentUserInterface;
  setCurrentUserData: any;
  resetCurrentUserData: any;
}

export interface BabyContextInterface {
  selectedBabyDetails: BabyWithEvents;
  babies: Baby[];
  setBabiesList: any;
  setSelectedBabyDetails: any;
}

export interface DisplayContextInterface {
  isBabyPanelLoading: boolean;
  setBabyPanelLoading: any;
  isEventPanelLoading: boolean;
  setEventsPanelLoading: any;
  selectedBabyId: string;
  setSelectedBabyId: any;
  displayedEventType: BabyEventType;
  setDisplayedEventType: any;
}

export interface AppContextInterface {
  userData: UserContextInterface;
  babyData: BabyContextInterface;
  displayData: DisplayContextInterface;
}
