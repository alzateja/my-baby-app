/* TypeScript file generated from Diapers.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const DiapersBS = require('./Diapers.bs');

export const createDiapersEvent: <T2>(token:string, diaperInput:{}) => Promise<T2> = function <T2>(Arg1: any, Arg2: any) {
  const result = Curry._2(DiapersBS.createDiapersEvent, Arg1, Arg2);
  return result
};

export const getDiapers: <T1>(token:string, babyId:string) => Promise<T1> = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(DiapersBS.getDiapers, Arg1, Arg2);
  return result
};

export const deleteDiapers: <T1>(token:string, diaperId:string) => Promise<T1> = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(DiapersBS.deleteDiapers, Arg1, Arg2);
  return result
};

export const editDiapers: <T2>(token:string, diaperId:string, diaperInput:{}) => Promise<T2> = function <T2>(Arg1: any, Arg2: any, Arg3: any) {
  const result = Curry._3(DiapersBS.editDiapers, Arg1, Arg2, Arg3);
  return result
};
