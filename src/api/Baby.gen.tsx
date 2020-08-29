/* TypeScript file generated from Baby.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const BabyBS = require('./Baby.bs');

export const createBaby: <T2>(token:string, babyInput:{}) => Promise<T2> = function <T2>(Arg1: any, Arg2: any) {
  const result = Curry._2(BabyBS.createBaby, Arg1, Arg2);
  return result
};

export const getBabies: <T1>(token:string, userId:string) => Promise<T1> = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(BabyBS.getBabies, Arg1, Arg2);
  return result
};

export const deleteBaby: <T1>(token:string, babyId:string) => Promise<T1> = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(BabyBS.deleteBaby, Arg1, Arg2);
  return result
};

export const editBaby: <T2>(token:string, babyId:string, babyInput:{}) => Promise<T2> = function <T2>(Arg1: any, Arg2: any, Arg3: any) {
  const result = Curry._3(BabyBS.editBaby, Arg1, Arg2, Arg3);
  return result
};
