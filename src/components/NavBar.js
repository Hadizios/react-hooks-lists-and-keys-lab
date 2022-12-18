import React from "react";
import About from "./About";
import Home from "./Home";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a key={Home} href="#home">
        home
      </a>
      <a key={About} href="#about">
        About
      </a>
      <a key={links.projects} href="#projects">
        Projects
      </a>
    </nav>
  );
}

export default NavBar;
