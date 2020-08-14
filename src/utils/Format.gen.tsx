/* TypeScript file generated from Format.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const FormatBS = require('./Format.bs');

export const isNotEmpty: (field:string) => boolean = FormatBS.isNotEmpty;

export const textMatches: <T1>(text1:T1, text2:T1) => boolean = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(FormatBS.textMatches, Arg1, Arg2);
  return result
};
