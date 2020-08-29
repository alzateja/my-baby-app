[@genType]
let hasReachedChildLimit = (babies) => babies |> Array.length >= 4;

[@genType]
let formatDateString = (dateString) =>  String.sub(dateString,0,10);
