// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Row from "react-bootstrap/Row";
import * as Spinner from "react-bootstrap/Spinner";

var Spinner$1 = {};

var Row$1 = {};

function LoadingPage(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(Row.default, {
                  className: "justify-content-center",
                  children: React.createElement("h2", undefined, "We are loading your page!")
                }), React.createElement(Row.default, {
                  className: "justify-content-center",
                  children: React.createElement(Spinner.default, {
                        animation: "border",
                        role: "status",
                        children: React.createElement("span", {
                              className: "sr-only"
                            }, "Loading")
                      })
                }));
}

var make = LoadingPage;

var $$default = LoadingPage;

export {
  Spinner$1 as Spinner,
  Row$1 as Row,
  make ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
