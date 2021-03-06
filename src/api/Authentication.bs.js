// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Axios from "axios";
import * as ApiConstants$MyBabyApp from "../constants/ApiConstants.bs.js";

function registerUser(userInput) {
  return Axios.post(ApiConstants$MyBabyApp.host + "signup", userInput).then(function (response) {
                return Promise.resolve(response.data);
              }).catch(function (error) {
              return Promise.resolve(error.response.data);
            });
}

function loginUser(userInput) {
  return Axios.post(ApiConstants$MyBabyApp.host + "users/login", userInput).then(function (response) {
                return Promise.resolve(response.data);
              }).catch(function (error) {
              return Promise.resolve(error.response.data);
            });
}

export {
  registerUser ,
  loginUser ,
  
}
/* axios Not a pure module */
