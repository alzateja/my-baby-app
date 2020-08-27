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

export const getBabies: <T1>(userId:string, token:string) => Promise<T1> = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(BabyBS.getBabies, Arg1, Arg2);
  return result
};

export const deleteBaby: <T1>(babyId:string, token:string) => Promise<T1> = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(BabyBS.deleteBaby, Arg1, Arg2);
  return result
};
