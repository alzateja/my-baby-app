module Container = {
  [@bs.module "react-bootstrap/Container"] [@react.component]
  external make: (
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
  <Container>
    <Row className="justify-content-center">
      <h1 className="text-center">{React.string("You have successfully signed out!")}</h1>
    </Row>
    <Row className="justify-content-center">
      <p>{React.string("Thank you for using our app")}</p>
    </Row>
  </Container>;
};

[@genType]
let default = make;
