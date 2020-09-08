export type BabyEventType = 'diapers' | 'feedings';
export type FeedingOptionsType = 'Nursing' | 'Bottle';
export type DiaperOptionsType = 'Mixed' | 'Wet' | 'Dirty';

export interface Feedings {
  feedingId: 'string';
  type: 'string';
  date: 'Date';
  babyId: 'string';
}

export type FeedingList = Feedings[];

export interface Diapers {
  diaperId: 'string';
  type: 'string';
  date: 'Date';
  babyId: 'string';
}

export type DiaperList = Diapers[];
