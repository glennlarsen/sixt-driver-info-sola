import React from "react";

function Header({ title, margin }) {
  return (
    <header>
      <h1 style={{ margin: margin + "px" }}>{title}</h1>
    </header>
  );
}

export default Header;
