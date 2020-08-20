/* TypeScript file generated from Authentication.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const AuthenticationBS = require('./Authentication.bs');

export const registerUser: (userInput:{}) => Promise<void> = AuthenticationBS.registerUser;

export const loginUser: (userInput:{}) => Promise<void> = AuthenticationBS.loginUser;
