import React from "react";
import NavigationBar from "../components/navigation";

import logo from "../assets/hive.png";

export default function Home() {
  return (
    <div>
      <NavigationBar />

      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>Welcome Hivers</p>
        <a
          className="App-link"
          href="https://github.com/gediont"
          target="_blank"
          rel="noopener noreferrer"
        >
          Under construction, Checkout Later
        </a>
      </header>
    </div>
  );
}
