
[@genType]
let isValidPassword = (password) => password |> String.length >= 8;

let emailRegex = [%re "/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/"];

[@genType]
let isValidEmail = (email) =>Js.String.match(emailRegex,email) !== None;

[@genType]
let isValidSignIn = (email, password)=> isValidEmail(email) && isValidPassword(password);

[@genType]
let passwordMatches = (password, confirmPassword)=> String.compare(password,confirmPassword) === 0;

[@genType]
let isValidRegistration = (email, password, confirmPassword)=> isValidSignIn(email,password) && passwordMatches(password, confirmPassword)
