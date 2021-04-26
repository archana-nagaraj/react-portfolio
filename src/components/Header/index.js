import React from "react";
import Nav from "../Nav";

function Header(props) {
  return (
    <header className="flex-row px-1" style={{display: "flex", justifyContent: "space-around"}}>
      <h2>
        <a data-testid="link" href="/" style={{background: "none", color: "#000000"}}>
          Archana Nagaraja
        </a>
      </h2>
      <Nav
        tabs={props.tabs}
        setCurrentTab={props.setCurrentTab}
        currentTab={props.currentTab}
      />
    </header>
  );
}

export default Header;

