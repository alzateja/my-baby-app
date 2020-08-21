module Button = {
  [@bs.module "react-bootstrap/Button"] [@react.component]
  external make: (
      ~href: string,
      ~children: option(React.element)=?
     ) => React.element = "default";
};

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
<h1>{React.string("Great success!")}</h1>
</Row>
<Row className="justify-content-center">
<p>{React.string("Login to your new account to get started")}</p>
</Row>
<Row className="justify-content-center">
<Button href="/login">
{React.string("Login Now")}
</Button>
</Row>
</>;
};

[@genType]
let default = make;
