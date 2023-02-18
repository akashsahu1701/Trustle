import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/svg/account.svg";
import PowerUps from "../../assets/svg/powerups.svg";
import Logo from "../../assets/svg/logo.svg";
import "./header.css";
import SearchWithoutButtons from "../Search/SearchWithoutButtons";

const Header = ({ logo, search }) => {
  return (
    <div className="home__header">
      <div className="home__headerLeft">
        {logo && (
          <div>
            <Link to="/">
              <img className="searchResult__logo" src={Logo} alt="Logo" />
            </Link>
          </div>
        )}
        {search && <SearchWithoutButtons />}
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
  );
};

export default Header;
