  open Js.Promise;

external promiseErrorToJsObj : error => Js.t('a) = "%identity";

[@genType]
let registerUser = (userInput)=>{
   Axios.postData(
    ApiConstants.host++"signup",
    {
      userInput;
    },
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  })
};


[@genType]
let loginUser = userInput =>{
   Axios.postData(
    ApiConstants.host++"users/login",
    {
      userInput;
    }
  )
  |>then_(response => resolve(response##data))
  |>catch(error => {
  let errorObject = error |> promiseErrorToJsObj;
  resolve(errorObject##response##data)
  }
)
};

