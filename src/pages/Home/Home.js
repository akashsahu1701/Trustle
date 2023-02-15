import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/MainLogo.svg";
import UserIcon from "../../assets/svg/account.svg";
import PowerUps from "../../assets/svg/powerups.svg";
import Search from "../../components/Search/Search";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* <Link to="/about">About</Link>
          <Link to="/store">Store</Link> */}
        </div>
        <div className="home__headerRight">
          {/* <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link> */}
          {/* <Avatar /> */}
          <div className="avatar">
            <img src={PowerUps} alt="powerups" />
          </div>
          <div className="avatar">
            <img src={UserIcon} alt="user" />
          </div>
        </div>
      </div>

      <div className="home__body">
        <img src={Logo} alt="Logo" />

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
