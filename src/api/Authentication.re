
[@genType]
let registerUser = (userInput)=>
  Js.Promise.(
   Axios.postData(
    ApiConstants.host++"signup",
    {
      userInput;
    },
  )
  |> then_(response => resolve(Js.log(response##data)))
  |> catch(error => resolve(Js.log(error)))
);

[@genType]
let loginUser = userInput =>
  Js.Promise.(
   Axios.postData(
    ApiConstants.host++"users/login",
    {
      userInput;
    }
  )
  |> then_(response => resolve(Js.log(response##data)))
  |> catch(error => resolve(Js.log(error)))
);
