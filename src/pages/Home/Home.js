import React from "react";
import logo from "../../assets/svg/logo.svg";

import Search from "../../components/Search/Search";

import "./Home.css";
import Header from "../../components/header/header";

function Home() {
  return (
    <div className="home">
      <Header logo={false} />
      <div className="home__body">
        <img src={logo} alt="Logo" />

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
