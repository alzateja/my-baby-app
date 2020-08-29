
[@genType]
let isValidPassword = (password) => password |> String.length >= 8;

let emailRegex = [%re "/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/"];

[@genType]
let isValidEmail = (email) =>Js.String.match(emailRegex,email) !== None;

[@genType]
let isValidSignIn = (email, password)=> isValidEmail(email) && isValidPassword(password);

[@genType]
let isValidRegistration = (email, password, confirmPassword)=> isValidSignIn(email,password) && FormatUtils.doStringsMatch(password, confirmPassword)
