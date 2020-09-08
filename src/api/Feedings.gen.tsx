/* TypeScript file generated from Feedings.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const FeedingsBS = require('./Feedings.bs');

export const createFeedingsEvent: <T2>(token:string, feedingInput:{}) => Promise<T2> = function <T2>(Arg1: any, Arg2: any) {
  const result = Curry._2(FeedingsBS.createFeedingsEvent, Arg1, Arg2);
  return result
};

export const getFeedings: <T1>(token:string, babyId:string) => Promise<T1> = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(FeedingsBS.getFeedings, Arg1, Arg2);
  return result
};

export const deleteFeedings: <T1>(token:string, feedingId:string) => Promise<T1> = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(FeedingsBS.deleteFeedings, Arg1, Arg2);
  return result
};

export const editFeedings: <T2>(token:string, feedingId:string, feedingInput:{}) => Promise<T2> = function <T2>(Arg1: any, Arg2: any, Arg3: any) {
  const result = Curry._3(FeedingsBS.editFeedings, Arg1, Arg2, Arg3);
  return result
};
