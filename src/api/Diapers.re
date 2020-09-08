  open Js.Promise;

external promiseErrorToJsObj : error => Js.t('a) = "%identity";

[@genType]
let createDiapersEvent = ( token, diaperInput )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.postDatac(
    ApiConstants.host++"diapers",
    {
      diaperInput;
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
let getDiapers = (token, babyId )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.getc(
    ApiConstants.host++"babies/"++babyId++"/diapers",
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};

[@genType]
let deleteDiapers = (token, diaperId )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.deletec(
    ApiConstants.host++"diapers/"++diaperId,
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};


[@genType]
let editDiapers = ( token, diaperId, diaperInput )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.patchDatac(
    ApiConstants.host++"diapers/"++diaperId,
    {
      diaperInput;
    },
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};
