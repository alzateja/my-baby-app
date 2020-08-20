module Button = {
  [@bs.module "react-bootstrap/Button"] [@react.component]
  external make: (
      ~href: string,
      ~children: option(React.element)=?
     ) => React.element = "default";
};

[@genType]
[@react.component]
let make = ()=>{
<>
<h1>{React.string("Great success!")}</h1>
<p>{React.string("Login to get started")}</p>
<Button href="/login">
{React.string("Login Now")}
</Button>
</>;
};

[@genType]
let default = make;
