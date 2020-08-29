/* TypeScript file generated from FormatUtils.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const FormatUtilsBS = require('./FormatUtils.bs');

export const isEmptyString: (string:string) => boolean = FormatUtilsBS.isEmptyString;

export const doStringsMatch: (string1:string, string2:string) => boolean = function (Arg1: any, Arg2: any) {
  const result = Curry._2(FormatUtilsBS.doStringsMatch, Arg1, Arg2);
  return result
};
