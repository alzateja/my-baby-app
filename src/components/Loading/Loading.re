module Spinner = {
  [@bs.module "react-bootstrap/Spinner"] [@react.component]
  external make: (
      ~animation: string,
      ~role: string,
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
<h2>{React.string("Loading...")}</h2>
</Row>
<Row className="justify-content-center">
<Spinner animation="border" role="status">
 <span className="sr-only">{React.string("Loading")}</span>
</Spinner>
</Row>
</>;
};

[@genType]
let default = make;
