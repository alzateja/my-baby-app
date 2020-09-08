  open Js.Promise;

external promiseErrorToJsObj : error => Js.t('a) = "%identity";

[@genType]
let createFeedingsEvent = ( token, feedingInput )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.postDatac(
    ApiConstants.host++"feedings",
    {
      feedingInput;
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
let getFeedings = (token, babyId )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.getc(
    ApiConstants.host++"babies/"++babyId++"/feedings",
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};

[@genType]
let deleteFeedings = (token, feedingId )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.deletec(
    ApiConstants.host++"feedings/"++feedingId,
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};


[@genType]
let editFeedings = ( token, feedingId, feedingInput )=> {
  let headerObject =CommonHeaders.configureTokenHeaders(token);
  let headers =  Axios.Headers.fromObj(headerObject);
   Axios.patchDatac(
    ApiConstants.host++"feedings/"++feedingId,
    {
      feedingInput;
    },
    Axios.makeConfig(~headers, ())
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};
