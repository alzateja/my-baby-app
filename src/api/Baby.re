  open Js.Promise;

external promiseErrorToJsObj : error => Js.t('a) = "%identity";

[@genType]
let createBaby = ( token, babyInput )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.postDatac(
    ApiConstants.host++"/babies",
    {
      babyInput;
    },
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};

[@genType]
let getBabies = (userId, token )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.getc(
    ApiConstants.host++"users/"++userId++"/babies",
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};

[@genType]
let deleteBaby = (babyId, token )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.deletec(
    ApiConstants.host++"babies/"++babyId,
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};

