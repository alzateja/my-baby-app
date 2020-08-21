/* TypeScript file generated from Authentication.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const AuthenticationBS = require('./Authentication.bs');

export const registerUser: <T2>(userInput:{}) => Promise<T2> = AuthenticationBS.registerUser;

export const loginUser: <T2>(userInput:{}) => Promise<T2> = AuthenticationBS.loginUser;
