/* TypeScript file generated from AuthUtils.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const AuthUtilsBS = require('./AuthUtils.bs');

export const isValidPassword: (password:string) => boolean = AuthUtilsBS.isValidPassword;

export const isValidEmail: (email:string) => boolean = AuthUtilsBS.isValidEmail;

export const isValidSignIn: (email:string, password:string) => boolean = function (Arg1: any, Arg2: any) {
  const result = Curry._2(AuthUtilsBS.isValidSignIn, Arg1, Arg2);
  return result
};

export const isValidRegistration: (email:string, password:string, confirmPassword:string) => boolean = function (Arg1: any, Arg2: any, Arg3: any) {
  const result = Curry._3(AuthUtilsBS.isValidRegistration, Arg1, Arg2, Arg3);
  return result
};
