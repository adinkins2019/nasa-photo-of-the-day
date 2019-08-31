import React from "react";
import Nav from "./nav.js";

const pageNavLinks = [
  {
    name: "Home",
    url: "#"
  }
];

export default function Header(props) {
  return (
    <header className="siteHeader">
      <h1>{props.siteTitle}</h1>
      <Nav links={pageNavLinks} />
    </header>
  );
}
