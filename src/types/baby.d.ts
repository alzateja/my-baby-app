import { FeedingList, DiaperList } from './events.d';

export interface Baby {
  babyId: string;
  name: string;
  dob: string;
  userId: string;
}

export type BabyList = Baby[];

export interface BabyWithEvents extends Baby {
  feedings: FeedingList;
  diapers: DiaperList;
}
