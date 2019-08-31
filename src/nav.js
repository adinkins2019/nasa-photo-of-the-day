import React from "react";

export default function Nav(props) {
  return (
    <nav>
      {props.links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.name}
        </a>
      ))}
    </nav>
  );
}