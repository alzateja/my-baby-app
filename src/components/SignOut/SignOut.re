module Row = {
  [@bs.module "react-bootstrap/Row"] [@react.component]
  external make: (
      ~className: string,
      ~children: option(React.element)=?
     ) => React.element = "default";
};

[@genType]
[@react.component]
let make = ()=>{
<>
<Row className="justify-content-center">
<h1>{React.string("You have successfully signed out!")}</h1>
</Row>
<Row className="justify-content-center">
<p>{React.string("Thank you for using our app")}</p>
</Row>

</>;
};

[@genType]
let default = make;
