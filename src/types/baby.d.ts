export interface Baby {
  babyId: string;
  name: string;
  dob: string;
  userId: string;
}

export type BabyList = Baby[];

export interface BabyWithEvents extends Baby {
  feedings: any[];
  diapers: any[];
}
